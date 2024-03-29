import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import grid5 from "../assets/grid5.png";

const BlogSec = () => {
  return (
    <div className="mt-20 p-16">
      <div>
        <h1 className="text-5xl font-black bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-y-10 gap-x-12 cursor-pointer max-h-fit">
        <div className="row-span-2 h-full">
          <div className="overflow-hidden h-1/4">
            <img src={grid1} className="transition-all hover:scale-150" />
          </div>
          <div className="bg-[#042C54] text-white p-5 h-3/4 flex flex-col justify-between">
            <div className="">
              <p>Sep 26, 2021</p>
              <p className="mt-5">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>
            <div>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="h-2/5 overflow-hidden">
            <img src={grid2} className="hover:scale-125 transition-all" />
          </div>
          <div className="bg-[#042C54] text-white p-5 h-3/5 flex flex-col justify-between">
            <div>
              <p>Sep 26, 2021</p>
              <p className="mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>
            <div>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="h-2/5 overflow-hidden">
            <img src={grid3} className="hover:scale-125 transition-all" />
          </div>
          <div className="bg-[#042C54] text-white p-5 h-3/5 flex flex-col justify-between">
            <div>
              <p>Sep 26, 2021</p>
              <p className="mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>
            <div>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="h-2/5 overflow-hidden">
            <img src={grid4} className="hover:scale-125 transition-all" />
          </div>
          <div className="bg-[#042C54] text-white p-5 h-3/5 flex flex-col justify-between">
            <div>
              <p>Sep 26, 2021</p>
              <p className="mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>
            <div>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="h-2/5 overflow-hidden">
            <img src={grid5} className="hover:scale-125 transition-all" />
          </div>
          <div className="bg-[#042C54] text-white p-5 h-3/5 flex flex-col justify-between">
            <div>
              <p>Sep 26, 2021</p>
              <p className="mt-3">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>
            <div>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSec;
