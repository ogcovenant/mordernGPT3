import Img from "../assets/Imagination.png";

const Imagination = () => {
  return (
    <div className="flex justify-center items-end">
      <div className="w-1/3 h-1/2 mt-0">
        <img
          src={Img}
          alt="Picture of a woman wearing a VR headset"
        />
      </div>
      <div className="w-1/3">
        <p className="cursor-pointer text-[#71E5FF]">
          Request early access to get started
        </p>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent mt-3">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-[#81AFDD] mt-5">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-[#FF8A71] mt-3 cursor-pointer">Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Imagination;
