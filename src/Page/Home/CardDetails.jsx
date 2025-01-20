import React from "react";
import { FaBookmark, FaClock, FaList, FaStar } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import SecondaryNav from "../../Shared/SecondaryNav";
import { FaCircleDot, FaComputer } from "react-icons/fa6";

const CardDetails = () => {
  return (
    <div className="my-20 w-10/12 mx-auto ">
      {/* Banner section */}
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-32">
          <img
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1737300328~exp=1737303928~hmac=3379a6153fd8537d7d08ff41af5a9556ee69eecdce1d6e96d562f51d6a948805&w=826"
            class="h-[460px] max-w-[572px] object-cover rounded-lg shadow-2xl boxSecondary"
          />
          <div className="max-w-3xl">
            <SecondaryNav
              link1="Course"
              link2="Course Details"
              route1="allSession"
            ></SecondaryNav>
            <h1 className="text-7xl font-extrabold mt-8">
              Introduction to User Experience Design
            </h1>
            {/* Session little information */}
            <div className="flex items-center gap-4 my-10 font-semibold">
              <h1 className="flex items-center gap-1 whitespace-nowrap">
                <FaBookmark></FaBookmark>
                1/02/25 - 27/02/25
              </h1>
              <h1 className="flex items-center gap-1 whitespace-nowrap">
                <FaClock></FaClock>
                1/03/25 - 27/03/25
              </h1>
              <h1 className="flex items-center gap-1 whitespace-nowrap">
                <FaStar></FaStar>
                3.5(3k review)
              </h1>
            </div>
            {/* purchase section */}
            <div className="flex items-center gap-8">
              <h2 className="font-extrabold text-5xl">$80</h2>
              <button className="btn font-bold border-2 border-black text-base hover:bg-black hover:text-white transition-all ease-in-out duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* what you learn form this course section */}
      <div className="my-24 flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-extrabold mb-4">What You will Learn</h2>
          <p className="max-w-2xl text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            accusantium tenetur explicabo distinctio sit repellendus eveniet
            molestias ratione reiciendis ad!
          </p>
        </div>

        {/* session formate */}
        <div className="flex items-center gap-4">
          <div className="border border-black p-6 hover:bg-black hover:text-white rounded-xl transition-all ease-in-out duration-300 flex items-center justify-center flex-col hover:scale-110">
            <FaComputer className="text-6xl mb-3"></FaComputer>

            <h2 className="text-3xl font-semibold mb-3">Course Format</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> Video Tutorials
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> Video Tutorials
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> Pulvinar sapien
              </li>
            </ul>
          </div>
          {/* second card 2*/}
          <div className="border border-black p-6 hover:bg-black hover:text-white rounded-xl transition-all ease-in-out duration-300 flex items-center justify-center flex-col hover:scale-110">
            <FaClock className="text-6xl mb-3"></FaClock>

            <h2 className="text-3xl font-semibold mb-3">Duration Course</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> 3 Weeks
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> 3 Tutorials Video
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> 3 Tutorials Video
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Session Instructors */}
      <div className="my-24 flex justify-center gap-10 items-center">
        <img src="	https://html.merku.love/collab/assets/images/mentor/mentor_details_image_1.jpg" alt="" className="h-[440px] boxSecondary" />

        <div className="ml-[7%]">
          <h1 className="text-6xl font-extrabold mb-4">Session Instructors</h1>
          {/* name */}
          <p className="text-4xl font-bold mb-2">Alex Edwards.</p>
          {/* type */}
          <p className="text-xl mb-2">Fullstack developer</p>
          {/* duration */}
            <div className="flex items-center gap-6 mb-4">
            <p className="text-lg flex items-center gap-1"><FaClock></FaClock> 120 Hours</p>
            <p className="text-lg flex items-center gap-1"><FaStar></FaStar> 4.2(22 review)</p>
            </div>
          {/* description */}
          <p className="text-lg max-w-xl">
            Scelerisque viverra mauris in aliquam. Mauris pharetra et ultrices
            neque ornare aenean. Diam quis enim lobortis scelerisque fermentum
            dui faucibus in. Venenatis lectus magna fringilla urna porttitor
            rhoncus dolor. Sem fringilla ut morbi tincidunt augue interdum velit
            euismod in. Blandit volutpat maecenas volutpat blandit aliquam etiam
            erat velit
          </p>
        </div>
      </div>

      {/* student Review */}
      

    </div>
  );
};

export default CardDetails;
