import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import loading from "../../../../public/Loading.json";
import Lottie from "lottie-react";
import { FaBook, FaLink } from "react-icons/fa6";

const StudyMatModal = ({ session, sessionId, material }) => {
  //   const axiosSecure = useAxiosSecure();
  //   const { data: material, isLoading } = useQuery({
  //     queryKey: ["material", session.sessionId],
  //     queryFn: async () => {
  //       const res = await axiosSecure.get(`/materials/${session.sessionId}`);
  //       return res.data;
  //     },
  //   });
  console.log(material);
  return (
    <dialog id={`my_modal_${sessionId}`} className="modal ">
      <div className="modal-box w-11/12 max-w-5xl text-black">
        <h3 className="font-extrabold text-3xl text-blue-800">
          {session.title}
        </h3>
        <h3 className="pt-4 text-lg">
          <span className="border-l-4 border-blue-700 font-bold text-blue-700  mx-3 text-xl pl-2">
            Tutor:
          </span>
          {session.tutorName}
        </h3>
        <h3 className="pt-2 text-lg">
          <span className="border-l-4 border-blue-700 text-blue-700 font-bold mx-3 text-xl pl-2">
            Email:
          </span>
          {session.tutorEmail}
        </h3>
        <h3 className="pt-2 text-lg">
          <span className="border-l-4 border-blue-700 text-blue-700 font-bold mx-3 text-xl pl-2">
            SessionId:
          </span>
          {session.sessionId}
        </h3>

        <div className="px-3 my-4 flex flex-col justify-center items-center border border-black p-6 w-6/12 mx-auto boxFixed">
          <h1 className="text-2xl font-bold border-l-4 border-blue-500 mb-4">
            {" "}
            Session Material
          </h1>
          {material.doc && material.image ? (
            <>
              <a
                href={material.doc}
                target="_blank"
                className="flex items-center gap-2 font-bold underline text-blue-500 text-xl"
              >
                {" "}
                <FaLink></FaLink>Google Drive Link
              </a>

              <a href={material.image} target="_blank">
                <button className="btn bg-black text-white my-3">
                  Download Image
                </button>
              </a>
            </>
          ) : (
            <>
            <div className="flex flex-col justify-center items-center">
            <Lottie animationData={loading} loop={true} className="max-w-28" />
            <h1 className="text-3xl font-bold text-blue-500 mb-4">Material will be soon Added</h1>
          </div>
             
            </>
          )}
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-red-500 text-white">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default StudyMatModal;
