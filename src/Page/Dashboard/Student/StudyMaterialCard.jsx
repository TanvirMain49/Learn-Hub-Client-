import React from "react";
import StudyMatModal from "./StudyMatModal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import loading from "../../../../public/Loading.json";
import Lottie from "lottie-react";
import { FaList } from "react-icons/fa6";

const StudyMaterialCard = ({ session }) => {

    const axiosSecure = useAxiosSecure();
    const {data:material, isLoading} = useQuery({
        queryKey:['material', session.sessionId],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/materials/${session.sessionId}`)
            return res.data;
        }
    })

    if (isLoading) {
        return (
          <div className="flex flex-col justify-center items-center">
            <Lottie animationData={loading} loop={true} className="max-w-72" />
          </div>
        );
      }
  return (
    <div className="card bg-white text-black border border-black hover:scale-105 transition-all ease-in-out duration-300">
      <img src={session.imageUrl} alt="" className="h-56 rounded-xl" />
      <div className="card-body">
        <h2 className="card-title text-3xl">{session.title}</h2>
      </div>
      <div className="flex justify-center items-center ">
        <button
          className="btn mb-6 bg-white border hover:bg-black hover:text-white  border-black transition-all ease-in-out duration-300 text-xl font-bold"
          onClick={() =>
            document.getElementById(`my_modal_${session._id}`).showModal()
          }
        >
          <FaList></FaList>
          View Material
        </button>
      </div>
      <StudyMatModal session={session} sessionId={session._id} material={material}></StudyMatModal>
    </div>
  );
};

export default StudyMaterialCard;
