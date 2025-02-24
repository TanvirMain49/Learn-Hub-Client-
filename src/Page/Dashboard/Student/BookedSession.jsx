import { Link } from "react-router-dom";
import DasHeading from "../../../Shared/DashBoardHeading";
import useBooked from "../../../Hooks/useBooked";
import Lottie from "lottie-react";
import Booked from "../../../../public/Booked.json";
import { FaList } from "react-icons/fa6";

const BookedSession = () => {
  const { bookedSessions } = useBooked();
  return (
    <>
      <DasHeading
        Heading="View Your Booked Study Session"
        subHeading="See Your Booked Sessions"
      ></DasHeading>
      {bookedSessions.length ? (
        <div className="overflow-x-auto px-4 sm:px-8 lg:px-16 py-4 rounded-xl">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center text-sm sm:text-lg bg-black text-white">
              <tr>
                <th>#</th>
                <th className="hidden lg:block">Image</th>
                <th>Title</th>
                <th>Tutor Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm sm:text-lg bg-white dark:bg-neutral-700 dark:text-white/80">
              {bookedSessions.map((booked, idx) => (
                <tr key={booked.sessionId} className="border border-black">
                  <th>{idx + 1}</th>
                  <td className='hidden lg:block'>
                    <div className="flex justify-center items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 sm:h-16 sm:w-16">
                          <img src={booked.imageUrl} alt={booked.title} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{booked.title}</td>
                  <td className="font-semibold">{booked.tutorName}</td>
                  <th>
                    <Link
                      to={`/cardDetails/${booked.sessionId}`}
                      className="flex items-center justify-center btn bg-white dark:bg-neutral-600 dark:text-white/80 text-xs sm:text-base border border-black font-bold hover:bg-black hover:text-white transition-all ease-in-out duration-300 px-2 py-1 sm:px-4 sm:py-2"
                    >
                      <FaList className="mr-1 hidden lg:block" /> View Details
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
