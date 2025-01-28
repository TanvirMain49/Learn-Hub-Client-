import image from "../../assets/review.jpg";

const ViewReview = () => {
  return (
    <div className="w-10/12 mx-auto flex gap-20 my-24">
      <img
        src={image}
        alt=""
        className="h-[580px] w-[640px] object-cover rounded-e-xl"
      />

      <div>
        <img
          src="https://www.pngkey.com/png/detail/84-844027_double-quotation-marks-beg-double-inverted-commas-png.png"
          alt=""
          className="h-24"
        />
        <h2 className="text-2xl mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse
          nisi consequatur perferendis laudantium veritatis, doloribus mollitia
          vero tenetur earum tempora consectetur sed asperiores. Eum.
        </h2>
          <div className="flex items-center gap-3 mt-5">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-20 rounded-2xl"/>
            <div className="flex flex-col">
            <h4>Jani na ke</h4>
            <p>janina@jani.com</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ViewReview;
