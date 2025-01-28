import { Link } from "react-router-dom";

const MaterialCard = ({ item }) => {
  return (
    <div className="card bg-white border hover:border hover:border-gray-950 box transition-all duration-300 ease-out mb-8 grow flex flex-col">
      <img
        src={item.imageUrl}
        className="w-full h-54 object-cover rounded-t-lg"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <div>
            {item.status === "pending" && (
              <h2 className="border border-black px-1 rounded font-semibold text-white bg-yellow-500 smooch-sans">
                {item.status}
              </h2>
            )}
            {item.status === "success" && (
              <h2 className="border border-black px-1 rounded font-semibold text-white bg-green-500 smooch-sans">
                {item.status}
              </h2>
            )}
            {item.status === "rejected" && (
              <h2 className="border border-black px-1 rounded font-semibold text-white bg-red-500 smooch-sans">
                {item.status}
              </h2>
            )}
          </div>
        </div>
        <Link  to={`/dashboard/addMaterial/${item._id}`}
         className="flex justify-center items-center mt-7 mb-4 flex-grow">
          <button
          disabled={item.status === 'pending'}
            className="flex items-center btn font-bold text-base border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Add Material
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MaterialCard;
