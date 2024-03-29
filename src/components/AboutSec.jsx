const AboutSec = () => {
  return (
    <div className="bg-gradient-to-r from-[#1b3357] to-[#040C18] p-5 text-white mt-8">
      <div className="p-20 bg-gradient-to-r from-[#040C18] to-[#1e447e] w-11/12 mx-auto">
        <div className="flex justify-between">
          <div>
            <span className="mb-3 block p-[1.5px] w-16 bg-gradient-to-r from-[#AE67FA] to-[#F49867]"></span>
            <h1 className="text-bold text-2xl">What is GPT3</h1>
          </div>
          <p className="pl-5 w-4/5">
            GPT-3, short for &quot;Generative Pre-trained Transformer 3,&quot;
            is a state-of-the-art natural language processing model developed by
            OpenAI. It belongs to the Transformer family of models and
            represents a significant advancement in AI language generation
            technology.
          </p>
        </div>
        <div className="mt-16 flex justify-between">
          <h1 className="text-3xl font-bold w-2/5 bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
            The possibilities are beyond your imagination
          </h1>
          <p className="text-[#FF8A71] cursor-pointer">Explore The Library</p>
        </div>
        <div className="mt-14 flex justify-between">
          <div className="w-1/3 p-3">
            <div>
              <span className="mb-3 block p-[1.5px] w-16 bg-gradient-to-r from-[#AE67FA] to-[#F49867]"></span>
              <h1 className="text-bold text-2xl">Chatbots</h1>
            </div>
            <p>
              Using our model, creation of chatbots have been made seamless and
              more productive.
            </p>
          </div>
          <div className="w-1/3 p-3">
            <div>
              <span className="mb-3 block p-[1.5px] w-16 bg-gradient-to-r from-[#AE67FA] to-[#F49867]"></span>
              <h1 className="text-bold text-2xl">KnowledgeBase</h1>
            </div>
            <p>
              Our model has been trained with resources gained from around the
              world.
            </p>
          </div>
          <div className="w-1/3 p-3">
            <div>
              <span className="mb-3 block p-[1.5px] w-16 bg-gradient-to-r from-[#AE67FA] to-[#F49867]"></span>
              <h1 className="text-bold text-2xl">Education</h1>
            </div>
            <p>
              Our model has proven effective in the training of other model and
              can also be used to meet vatious educational uses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;