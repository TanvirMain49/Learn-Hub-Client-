import Lottie from 'lottie-react';
import connect from '../../assets/Consultation.json';

const ConnectUs = () => {
  return (
    <section className="bg-black text-white md:pt-16 mt-24 flex justify-center items-center md:min-h-[580px] relative">
      <div className="hidden md:block absolute top-0 left-[38%]">
        <Lottie animationData={connect} loop={true} className="max-w-52" />
      </div>
      
      <div className="max-w-6xl py-16 flex flex-col justify-between md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="md:text-5xl text-2xl font-bold mb-6 px-7 md:px-0">
            To Help You Choose the Right Course, You Need to Book a Consultation
          </h2>
          <p className="md:text-lg text-base md:px-0 px-3">
            Get expert guidance to choose the right course for your goals. Book a consultation and start your learning journey with confidence!
          </p>
        </div>
        
        {/* Form Section */}
        <div className="md:w-[530px] md:boxFixed h-auto border border-black bg-white text-black p-6 rounded-lg md:absolute md:left-[55%] md:top-[10%]">
          <h3 className="text-3xl font-bold mt-4 ml-3">Get a Consultation</h3>
          <form className="md:space-y-5 space-y-3 md:p-4 border-black">
            <div>
              <label className="block font-medium">Name</label>
              <input type="text" placeholder="Input Name" className="w-full border border-black px-2 md:py-4 py-2 rounded-lg" />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input type="email" placeholder="Input Email" className="w-full border border-black px-2 md:py-4 py-2 rounded-lg" />
            </div>
            <div>
              <label className="block font-medium">Message</label>
              <textarea rows='5' placeholder="Input Your Question" className="w-full border-black px-2 md:py-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white border border-black py-3 hover:bg-black hover:text-white transition-all ease-in-out duration-300 rounded-lg font-semibold">
              Get a Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectUs;