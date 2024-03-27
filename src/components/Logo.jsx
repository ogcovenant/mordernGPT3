import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <img src={logo} alt="GPT3 Logo" className="rounded-full w-12"/>
        <h1 className="text-white font-bold text-3xl ">GPT3</h1>
      </div>
    </>
  )
}

export default Logo