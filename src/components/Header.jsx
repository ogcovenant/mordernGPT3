import Logo from "./Logo"

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1b3357] to-[#040C18] p-7 flex items-center justify-around">
        <Logo />
        <nav className="text-white">
          <ul className="flex gap-5">
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">Home</li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">What is GPT3</li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">OpenAI</li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">Case Studies</li>
            <li className="cursor-pointer border-[#F49867] transition-all duration-75 ease-in hover:border-b-2">Library</li>
          </ul>
        </nav>
        <div>
          <ul className="flex text-white gap-5 items-center">
            <li className="cursor-pointer">Sign In</li>
            <li className="bg-[#FF4820] p-3 rounded-md w-24 text-center">Sign Up</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header