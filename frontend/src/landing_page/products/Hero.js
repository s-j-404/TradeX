import React from 'react';
function Hero() {
    return (
      <div>
        <div className="p-5 border-bottom mb-5" style={{ textAlign: "center" }}>
          <h1 className=" pt-5">Zerodha Products</h1>
          <h4 className="p-3 text-muted">
            Sleek, modern, and intuitive trading platforms
          </h4>
          <h6 className=" mb-5 text-muted">
            Check out our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              investment offerings →
            </a>
          </h6>
        </div>
      </div>
    );
}

export default Hero;