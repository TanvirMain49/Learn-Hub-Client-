import bannerImg from "../../assets/allSessionBanner.jpg";
import SecondaryNav from '../../Shared/SecondaryNav';

const AllSessionBanner = () => {
  return (
    <div className="flex flex-col-reverse justify-center py-12 lg:flex-row-reverse gap-8 mb-16 bg-white px-4 lg:px-12">
      {/* Image Section */}
      <img
        src={bannerImg}
        alt="All Sessions Banner"
        className="h-[250px] w-full lg:h-[420px] lg:max-w-[572px] object-cover rounded-lg shadow-2xl border-2 border-gray-300"
      />

      {/* Text Section */}
      <div className="w-full lg:max-w-3xl text-center lg:text-left">
        <SecondaryNav link1="All Session" route1="allSession" />
        <h1 className="text-3xl lg:text-5xl font-extrabold mt-6 lg:mt-8">
          Explore All Available Sessions
        </h1>
        <p className="text-base lg:text-lg mt-4 lg:mt-5 mx-auto lg:mx-0 max-w-lg">
          Find the perfect session that matches your learning needs. Browse,
          book, and start your journey today!
        </p>

        {/* Search Section */}
        <div className="flex justify-center lg:justify-start mt-6 lg:mt-8">
          <input
            type="text"
            name="search"
            placeholder="Search here"
            className="input border border-black w-full max-w-xs rounded-r-none"
          />
          <button className="btn bg-black text-white rounded-l-none border border-black hover:bg-black hover:text-white transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllSessionBanner;