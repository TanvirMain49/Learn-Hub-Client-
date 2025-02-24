import { FaChalkboardTeacher } from "react-icons/fa";

export default function TotalTutor({totalTutor}) {
  return (
    <div className="card border-black border boxFixed w-64">
      <div className="card-body flex-row gap-6 items-center">
        <FaChalkboardTeacher  className="text-5xl dark:text-white/80" />
        <div>
          <h2 className="text-lg font-extrabold dark:text-white/80">Total Tutor</h2>
          <h1 className="text-3xl font-bold dark:text-white/80">{totalTutor}</h1>
        </div>
      </div>
    </div>
  );
}
