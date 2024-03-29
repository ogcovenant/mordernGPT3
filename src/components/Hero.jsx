import illustration from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#1b3357] to-[#040C18] p-5 flex flex-col md:flex-row  items-center justify-between">
      <div className="w-full md:w-1/2 p-2">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
          Build Something amazing with OpenAI&apos;s GPT-3
        </h1>
        <p className="text-white mt-3">
          Step into a realm where innovation meets possibility, where algorithms
          shape tomorrow, and where artificial intelligence paves the way for
          extraordinary breakthroughs.
        </p>
        <div className="mt-3 flex">
          <input
            className="w-3/4 p-5 text-sm bg-[#052D56] text-[#3D6184] outline-none border-none"
            placeholder="Your email address"
            type="text"
          />
          <button className="w-1/4 text-white bg-[#FF4820] p-2 text-sm">
            Get Started
          </button>
        </div>
      </div>
      <div className="">
        <img
          className="h-[500px] mx-auto"
          src={illustration}
          alt="Illustration of an AI"
        />
      </div>
    </div>
  );
};

export default Hero;
