import image from "../../assets/review.jpg";

const ViewReview = ({review}) => {
  return (
    <div className="md:w-10/12 md:mx-auto mx-2 flex md:flex-row flex-col md:gap-20 gap-10 md:my-24 my-10">
      <img
        src={image}
        alt=""
        className="h-[580px] md:w-[640px] object-cover rounded-xl"
      />

      <div className="md:mt-0">
        <img
          src="https://www.pngkey.com/png/detail/84-844027_double-quotation-marks-beg-double-inverted-commas-png.png"
          alt=""
          className="md:h-24 h-16"
        />
        <h2 className="md:text-2xl text-lg md:mt-12 mt-6">
          {review.review
          }
        </h2>
          <div className="flex items-center gap-3 mt-5">
            <img src={review.photo} className="w-20 rounded-2xl"/>
            <div className="flex flex-col">
            <h4 className="text-2xl font-bold">{review.name}</h4>
            <p className="text-base">{review.email}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ViewReview;
