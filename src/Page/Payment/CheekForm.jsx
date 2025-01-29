import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useCardDetails from "../../Hooks/useCardDetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { id } = useParams();
  const { items, refetch } = useCardDetails(id);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();

  const price = parseFloat(items.price);

  //   !for free session
  const handleFree = async () => {
    const bookedSession = {
      title: items.title,
      email: user?.email,
      name: user?.displayName,
      sessionId: items._id,
      tutorName: items.tutorName,
      tutorEmail: items.tutorEmail,
      date: new Date(),
      imageUrl: items.imageUrl,
    };
    const bookedRes = await axiosSecure.post(
      `/bookedSession?id=${items._id}&email=${user?.email}`,
      bookedSession
    );
    if (bookedRes.data?.insertedId > "0") {
      Swal.fire({
        title: `${items.title} is added`,
        icon: "success",
        draggable: true,
        customClass: {
          confirmButton: "bg-black text-white hover:bg-gray-800",
        },
      });
      refetch();
      navigate("/dashboard/bookedSession");
    }
  };

  if (price === 0) {
    return (
      <div class="w-6/12 border border-black boxFixed mx-auto text-center py-10 px-6 bg-gray-100 rounded-lg shadow-md">
        <h1 class="text-3xl font-semibold text-green-600 mb-4">
          This session is free for Everyone!!
        </h1>
        <p class="text-lg text-gray-700 mb-6">
          Click on the booked session, and it will be added to your booked
          session.
        </p>
        <button
          onClick={handleFree}
          class="inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition ease-in-out duration-300"
        >
          Booked Session
        </button>
      </div>
    );
  }

  useEffect(() => {
    if (price) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => console.error("Error creating payment intent:", err));
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      setError("Card information is required.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Payment method created successfully!");
      // console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonyms",
            name: user?.displayName || "anonyms",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    }
    if (paymentIntent) {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        price: price,
        date: new Date(),
        transactionId: transactionId,
      };
      const bookedSession = {
        title: items.title,
        email: user?.email,
        name: user?.displayName,
        sessionId: items._id,
        tutorName: items.tutorName,
        tutorEmail: items.tutorEmail,
        date: new Date(),
        imageUrl: items.imageUrl,
      };

      const bookedRes = await axiosSecure.post(
        `/bookedSession?id=${items._id}&email=${user?.email}`,
        bookedSession
      );
      if (bookedRes.data?.insertedId > "0") {
        refetch();
        const paymentRes = await axiosSecure.post(`/sessionPayments`, payment);
        if (paymentRes.data.insertedId > "0") {
          Swal.fire({
            title: `${items.title} is added`,
            icon: "success",
            draggable: true,
            customClass: {
              confirmButton: "bg-black text-white hover:bg-gray-800",
            },
          });
          refetch();
          navigate("/dashboard/bookedSession");
        }
      }
    }
  };

  return (
    <div className="w-8/12 mx-auto">
      <form
        className="border border-black rounded-xl px-6 py-6 boxFixed"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="card-element"
            className="block text-gray-700 font-bold text-3xl text-center mb-6"
          >
            Card Details
          </label>
          <div className="border border-black rounded-md p-4 bg-white focus-within:ring focus-within:ring-black">
            <CardElement
              className="text-black"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
                hidePostalCode: false,
              }}
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="country"
            className="block text-gray-700 font-medium mb-2"
          >
            Country
          </label>
          <select className="w-full p-4 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black">
            <option value="Bangladesh">Bangladesh</option>
            <option value="Bangladesh">USA</option>
            <option value="Bangladesh">Australia</option>
            <option value="Bangladesh">Japan</option>
            <option value="Bangladesh">Pakistan</option>
          </select>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <input
              type="radio"
              name="payment-method"
              className="mr-2"
              checked
              readOnly
            />
            <label htmlFor="card" className="text-gray-700 font-medium">
              Card
            </label>
          </div>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
        <div className="flex justify-center items-center">
          <button
            className="btn bg-black text-white  py-3 rounded-md font-medium"
            type="submit"
            disabled={!stripe}
          >
            Pay now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
