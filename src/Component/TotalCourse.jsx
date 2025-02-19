import { GoStack } from "react-icons/go";

export default function TotalCourse({totalCourse}) {
  return (
    <div className="card border-black border boxFixed w-64">
      <div className="card-body flex-row gap-6 items-center">
        <GoStack  className="text-5xl" />
        <div>
          <h2 className="text-lg font-extrabold">Total Course</h2>
          <h1 className="text-3xl font-bold">{totalCourse.length}</h1>
        </div>
      </div>
    </div>
  );
}
