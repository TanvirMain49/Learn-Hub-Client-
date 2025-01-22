import Modal from "./Modal";

const MaterialCard = ({ item }) => {
  return (
    <div className="card w-96 bg-white border hover:border hover:border-gray-950 transition-all duration-300 ease-out mb-8">
      <figure className="rounded-t-xl w-full h-78">
        <img
          src={item.imageUrl}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          {item.status == "pending" && (
            <h2 className="border border-black px-1 rounded font-semibold text-white bg-yellow-500 smooch-sans">
              {item.status}
            </h2>
          )}
          {item.status == "success" && (
            <h2 className="border border-black px-1 rounded font-semibold text-white bg-green-500 smooch-sans">
              {item.status}
            </h2>
          )}
          {item.status == "rejected" && (
            <h2 className="border border-black px-1 rounded font-semibold text-white bg-red-500 smooch-sans">
              {item.status}
            </h2>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
        </div>
        <div className="flex justify-between items-center my-4">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="flex items-center btn font-bold text-base border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Update Material
          </button>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <Modal item={item}></Modal>
    </div>
  );
};

export default MaterialCard;
