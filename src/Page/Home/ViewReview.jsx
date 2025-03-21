import { FaQuoteLeft } from "react-icons/fa";
import image from "../../assets/review.jpg";

const ViewReview = ({review}) => {
  return (
    <div className="md:w-11/12 md:mx-auto mx-2 flex md:flex-row flex-col md:gap-20 gap-10 md:my-24 my-10">
      <img
        src={image}
        alt=""
        className="h-[580px] md:w-[640px] object-cover rounded-xl"
      />

      <div className="md:mt-0">
        <FaQuoteLeft className="text-8xl dark:text-white/80" />
        <h2 className="md:text-2xl text-lg md:mt-12 mt-6 dark:text-white/80">
          {review.review
          }
        </h2>
          <div className="flex items-center gap-3 mt-5">
            <img src={review.photo} className="w-20 rounded-2xl"/>
            <div className="flex flex-col">
            <h4 className="text-2xl font-bold dark:text-white/60">{review.name}</h4>
            <p className="text-base dark:text-white/60">{review.email}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ViewReview;
