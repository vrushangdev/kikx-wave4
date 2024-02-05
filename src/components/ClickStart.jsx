import React from "react";

function ClickStart() {
  return (
    <section className=" relative -mt-[5%] sm:-mt-[1%]">
        <div className=" mx-auto  justify-center mt-5 mb-2  flex">
            <a
              href="https://test.kix.digital/?utm_source=landingpage&utm_medium=website&utm_campaign=tradeathon&utm_content=wave3&utm_term=1millionkixtokens" 
              className="  tracking-[-0.11em] uppercase archo-black text-5xl  sm:text-6xl  py-2 px-4 sm:px-6   bg-[#fbe000] border-2 border-[#000]   mx-auto btn-hov rounded-xl  text-[#94339d]"
            >
              {" "}
              Play <span>Now</span>
              {/* <img src="images/click.png" alt="" className=" h-[34px] sm:h-[45px]" /> */}
            </a>
          </div>
   
    </section>
  );
}

export default ClickStart;
