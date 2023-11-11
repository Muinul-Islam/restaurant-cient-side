import { Parallax } from "react-parallax";

const Cover = ({ img, title, info }) => {
  const parallaxContainerStyle = {
    height: "600px", // Set the desired height for the Parallax container
  };

  const overlayStyle = {
    height: "30%", // Make the overlay div take the full height of the container
  };

  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
      style={parallaxContainerStyle}
    >
      <div style={parallaxContainerStyle}>
        <div className="hero h-full" style={parallaxContainerStyle}>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md relative z-10">
              <h1 className="mb-5 text-5xl text-white font-bold uppercase">
                {title}
              </h1>
              <p className="mb-5 text-white">{info}</p>
            </div>
            <div
              className="w-[500px] h-48 flex justify-center items-center overlay absolute bg-black bg-opacity-50"
              style={overlayStyle}
            ></div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
