import SecondaryNav from '../../Shared/SecondaryNav';

const AllSessionBanner = ({title, description, img, link1, route1}) => {
  return (
    <div className="flex flex-col-reverse justify-center pb-12 md:pt-32 pt-20 lg:flex-row-reverse gap-4 mb-16 bg-white px-4 lg:px-20">
      {/* Image Section */}
      <img
        src={img}
        alt="All Sessions Banner"
        className="h-[280px] w-full lg:h-[420px] lg:max-w-[624px] object-cover rounded-lg shadow-2xl md:boxFixed border-2 border-gray-300"
      />

      {/* Text Section */}
      <div className="w-full lg:max-w-3xl text-center lg:text-left">
        <SecondaryNav link1={link1} route1={route1} />
        <h1 className="text-3xl lg:text-5xl font-extrabold mt-6 lg:mt-8">
          {title}
        </h1>
        <p className="text-base lg:text-lg mt-4 lg:mt-5 mx-auto lg:mx-0 max-w-lg">
          {description}
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