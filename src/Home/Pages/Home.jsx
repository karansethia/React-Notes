import React from "react";
import hero from "../../assets/hero.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        id="hero"
        className="w-full px-16 h-[90vh] flex items-center max-md:px-4"
      >
        <div className="w-[60%] max-md:w-full">
          <h3 className="font-headerFont font-bold text-4xl">
            Your
            <span className="custom-gradient"> ideas</span>, neatly captured
            <span className="custom-gradient"> anytime anywhere </span>
          </h3>
          <p className="text-xs text-slate-500 font-noteFont py-4 mr-14 tracking-wider">
            Streamline your thoughts with our intuitive notepad app. Effortless
            organization, sync across devices, and a sleek design for
            productivity on-the-go.
          </p>
          <Link
            to="/login"
            className="text-sm font-headerFont bg-royal text-white px-8 py-2 rounded-md transition-all hover:bg-dark"
          >
            Try Now
          </Link>
        </div>
        <div className="w-[35%] max-md:hidden">
          <img src={hero} alt="note" className="w-full ml-8 " />
        </div>
      </div>
      <div
        id="section1"
        className="w-full px-16 h-[60vh] flex items-center bg-dark py-[15rem]"
      >
        <div className="w-[50%] max-md:hidden">
          <img src={img2} alt="note" className="w-[25rem] ml-8" />
        </div>
        <div className="w-[50%]">
          <h3 className="font-headerFont text-2xl text-slate-200">
            Organise, Arrange and Search for your notes
          </h3>
        </div>
      </div>
      <div
        id="section2"
        className="w-full px-16 h-[60vh] flex items-center py-[15rem]"
      >
        <div className="w-[50%]">
          <h3 className="font-headerFont text-2xl text-slate-600">
            Sync across all devices seamlessly
          </h3>
        </div>
        <div className="w-[50%] max-md:hidden">
          <img src={img4} alt="note" className="w-[35rem] " />
        </div>
      </div>
      <div
        id="section3"
        className="w-full px-16 h-[60vh] flex items-center bg-dark py-[15rem] max-md:px-4"
      >
        <div className="w-[50%] max-md:hidden">
          <img src={img3} alt="note" className="w-[25rem] ml-8  max-md:ml-1" />
        </div>
        <div className="w-[50%] max-md:w-full">
          <h3 className="font-headerFont text-2xl text-slate-200">
            Share your notes to friends and colleagues
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
