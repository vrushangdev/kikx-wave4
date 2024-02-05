

import Hero from "../components/Hero";



function Home() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setLoading(false);
    //   }, 1000); // 1000 milliseconds = 1 second
  
    //   // Clear the timeout if the component unmounts
    //   return () => clearTimeout(timer);
    // }, []);
    return (
      <>
    {/* {loading && (
          <div className="loader flex justify-center items-center bg-[#6dc5f8] main h-[100vh]">
            <Bars
              height="100"
              width="100"
              visible={true}
              color="#33eceb"
              ariaLabel="falling-circles-loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        )} */}
        <div className=" overflow-hidden" >
          <div className=" ">
            <Hero />
          </div>
         
        
          {/* <div className=" py-2">
            <About />
          </div> */}
        </div>
      </>
    );
  }

export default Home