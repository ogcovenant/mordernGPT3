const Footer = () => {
  return (
    <div className="bg-[#031B34] pt-16 md:pt-36">
      <div>
        <h1 className="text-3xl md:text-5xl w-1/2 mx-auto text-center font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
          Do you want to step in to the future before others
        </h1>
        <button className="block text-white mt-8 mx-auto border border-white py-3 px-5">
          Request Early Access
        </button>
      </div>
      <div className="text-white mt-10 p-12 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-3xl font-extrabold w-2/5">GPT-3</h3>
          <p>
            Crechterwoord K12 182 DK Alknjkcb,
            <br /> All Rights Reserved
          </p>
        </div>
        <div className="mt-10 md:mt-0 gap-16 md:gap-0 w-3/5 flex flex-col md:flex-row justify-around">
          <div>
            <h6 className="font-extrabold">Links</h6>
            <ul className="mt-3">
              <li className="cursor-pointer">Overons</li>
              <li className="mt-1 cursor-pointer">Social Media</li>
              <li className="mt-1 cursor-pointer">Counters</li>
              <li className="mt-1 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h6 className="font-extrabold">Company</h6>
            <ul className="mt-3">
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="mt-1 cursor-pointer">Privacy Policy</li>
              <li className="mt-1 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h6 className="font-extrabold">Get in touch</h6>
            <ul className="mt-3">
              <li>Crechterwoord K12 <br /> 182 DK Alknjkcb</li>
              <li className="mt-2 cursor-pointer">085-132567</li>
              <li className="mt-2 cursor-pointer">info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-center text-sm">
        © 2024   GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
