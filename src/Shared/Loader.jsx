import Lottie from "lottie-react";
import loading from "../../public/Loading.json"

const Loader = () => {
    return (
      <div className="flex flex-col justify-center items-center mt-[20%]">
      <Lottie animationData={loading} loop={true} className="max-w-72 text-black" />
    </div>
    );
};

export default Loader;