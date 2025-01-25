import { Link } from "react-router-dom";
import DasHeading from "../../../Shared/DashBoardHeading";
import useBooked from "../../../Hooks/useBooked";
import Lottie from "lottie-react";
import Booked from "../../../../public/Booked.json";

const BookedSession = () => {
  const { bookedSessions } = useBooked();
  return (
    <>
      <DasHeading Heading="View Your Booked Study Session"></DasHeading>
      {bookedSessions.length ? (
        <div className="overflow-x-auto px-16 ">
          <table className="table">
            {/* head */}
            <thead className="text-center text-lg bg-black text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Tutor Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-lg bg-gray-100">
              {bookedSessions.map((booked) => (
                <tr className="border border-black">
                  <th>1</th>
                  <td>
                    <div className="flex justify-center items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                          <img src={booked.imageUrl} alt={booked.title} />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <td className="font-semibold">{booked.title}</td>
                  <td className="font-semibold">{booked.tutorName}</td>
                  <th>
                    <Link
                      to={`/cardDetails/${booked.sessionId}`}
                      className="flex items-center btn border border-black font-bold text-sm hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                    >
                      View Details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Lottie animationData={Booked} loop={true} className="max-w-80" />
          <h1 className="text-center text-3xl font-extrabold">
            Booked Your Session First
          </h1>
        </div>
      )}
    </>
  );
};

export default BookedSession;
