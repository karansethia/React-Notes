import React from "react";
import hero from "../../assets/hero.png";

const Home = () => {
  return (
    <div>
      <div id="hero" className="w-full px-16 h-[90vh] flex items-center">
        <div className="w-[60%]">
          <h3 className="font-headerFont font-bold text-4xl">
            Your
            <span className="custom-gradient"> ideas </span>, neatly captured
            <span className="custom-gradient"> anytime anywhere </span>
          </h3>
          <p className="text-xs text-slate-500 font-textFont py-4 mr-14">
            Streamline your thoughts with our intuitive notepad app. Effortless
            organization, sync across devices, and a sleek design for
            productivity on-the-go.
          </p>
          <button className="text-sm font-headerFont bg-royal text-white px-8 py-1 rounded-md transition-all hover:bg-dark">
            Try Now
          </button>
        </div>
        <div className="w-[35%]">
          <img src={hero} alt="note" className="w-full ml-8" />
        </div>
      </div>
      <div id="section1"></div>
      <div id="section2"></div>
      <div id="section3"></div>
    </div>
  );
};

export default Home;
