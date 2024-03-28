import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyDisplay from "./components/CompanyDisplay";
import AboutSec from "./components/AboutSec";
import MoreAboutSec from "./components/MoreAboutSec";
import Imagination from "./components/Imagination";
import RegisterSec from "./components/RegisterSec";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1b3357] to-[#040C18]">
        <Header />
        <Hero />
        <CompanyDisplay />
        <AboutSec />
        <MoreAboutSec />
        <Imagination />
        <RegisterSec />
      </div>
    </>
  );
}

export default App;
