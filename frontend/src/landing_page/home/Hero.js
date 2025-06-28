import React from 'react';
function Hero() {
    return (
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <div className="col">
            <img
              src="media/images/homeHero.png"
              alt="Hero Section"
              className="img-fluid mb-5"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h1 className="mt-5">Invest in everything</h1>
            <p className="fs-5" >
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <button
              className="p-2 btn btn-primary fs-5 "
              style={{ width: "30%", margin: "0 auto" }}
            >
              Sign up Now
            </button>
          </div>
        </div>
      </div>
    );
}

export default Hero;