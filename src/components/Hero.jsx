import React from "react";
import ClickStart from "../components/ClickStart";

function Hero() {
  return (
    <section className=" relative  h-[100vh]  ">
      <div className="container-wrapper relative z-50 flex items-center flex-col ">
        <img
          src="images/free.png"
          alt=""
          className=" absolute left-3 sm:-left-[2%] h-[150px] sm:h-[220px] top-[4%] sm:top-[25%]"
        />
        <img
          src="images/winn.png"
          alt=""
          className=" absolute right-0 sm:-right-[1%] h-[150px] sm:h-[220px] top-5 sm:top-[49%]"
        />
        <img
          src="images/chart.png"
          alt=""
          className=" absolute -z-[2] top-[45%] sm:top-[16%]"
        />
        <div className="py-3 sm:py-2 flex items-center gap-4">
          <img
            src="images/logo.png"
            alt=""
            className=" mx-auto h-[2rem] sm:h-[40px]"
          /> <h2 className=" font-work text-4xl font-normal text-white">TRADE-ATHON </h2>
        </div>
        <div className=" sm:pt-0 pt-[40%]">
          <img
            src="images/tredtext.png"
            alt=""
            className=" mx-auto py-1 -mt-3  sm:-mt-6 sm:py-4 sm:h-[9.5rem] h-[3.5rem] "
          />
        </div>

        {/* <div className=" relative ">
          <h1
            className="  text-white  lh-1_1 
          sm:text-2xl text-lg  text-center "
          >
            BUY & SELL FOOTBALLERS
          </h1>
        </div> */}

        <div>
          <img
            src="/teen.png"
            alt=""
            className=" mx-auto h-auto sm:h-[250px]"
          />
        </div>

        <div className="  mt-4 sm:mt-0 sm:mb-0 mb-3 ">
          <ClickStart />
        </div>

        <div className="">
          <h1 className="uppercase archo-black text-xl sm:text-3xl txt-s text-white text-center tracking-[-0.11em] sm:mb-0 mb-3">
            {/* <img src="images/play.png" alt="" className=" mx-auto h-full sm:h-[50px]" /> */}  
            {/* <span className="text-[#edd400]">PLAY </span> */}
           FOR A SHARE OF
          </h1>
          <img
            src="images/100k.png"
            alt=""
            className=" mx-auto h-auto sm:h-[105px]"
          />
          <p className=" font-work text-4xl text-white "> <span className=" archo-black">+</span> 1,000,000 $KIX</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
