import { GoStack } from "react-icons/go";

export default function TotalCourse({totalCourse}) {
  return (
    <div className="card border-black border boxFixed w-64">
      <div className="card-body flex-row gap-6 items-center">
        <GoStack  className="text-5xl dark:text-white/80" />
        <div>
          <h2 className="text-lg font-extrabold dark:text-white/80">Total Course</h2>
          <h1 className="text-3xl font-bold dark:text-white/80">{totalCourse.length}</h1>
        </div>
      </div>
    </div>
  );
}
