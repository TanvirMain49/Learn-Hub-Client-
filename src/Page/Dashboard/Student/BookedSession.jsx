import React from "react";
import SectionHeading from "../../../Shared/sectionHeading";
import { Link } from "react-router-dom";

const BookedSession = () => {
  return (
    <div>
      <SectionHeading
        heading="View Your Booked Study Session"
        paragraph="Booked Session displays scheduled study sessions with details like tutor info and timing, helping students stay organized"
      ></SectionHeading>

      <div>
        <div className="overflow-x-auto px-16 ">
          <table className="table">
            {/* head */}
            <thead className="text-center text-lg bg-black text-white">
              <tr>
                <th>#</th>
                <th>Session</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-lg bg-gray-100">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-16 w-16">
                        <img
                          src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1737300328~exp=1737303928~hmac=3379a6153fd8537d7d08ff41af5a9556ee69eecdce1d6e96d562f51d6a948805&w=826"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="border border-black px-1 rounded font-semibold text-white bg-green-500 smooch-sans">
                        On going
                      </h2>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">Introduction to User Experience Design</td>
                <th>
                  <Link
                    to={`/cardDetails`}
                    className="flex items-center btn border border-black font-bold text-sm hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                  >
                    View Details
                  </Link>
                </th>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookedSession;
