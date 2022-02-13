import NavBar from "./NavBar";

const Intro = () => {
  return (
    <>
      <header className="bg-vlr round-bl intro py-8 text-white relative">
        <NavBar />
        <div className="text-center my-40 px-7">
          <h2 className="md:text-5xl text-4xl z-0">
            A modern publishing platform
          </h2>
          <p className="text-gray-200 my-10 z-0 text-lg">
            Grow your audience and build your online brand.
          </p>
          <button className="btn text-lr border-white font-bold border-2 bg-white mr-4">
            Start for Free
          </button>
          <button className="btn border-white font-bold border-2">
            Learn More
          </button>
        </div>
      </header>
    </>
  );
};

export default Intro;
