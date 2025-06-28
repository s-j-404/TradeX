import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="support-header d-flex justify-content-between align-items-center p-5">
        <h4 className="text-white">Support Portal</h4>
        <a href="" className="text-white text-decoration-underline">
          Track tickets
        </a>
      </div>

      <div className="row support-body p-4">
        <div className="col-md-7">
          <h4 className="text-white mb-4">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            className="form-control mb-4"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
          />
          <div className="quick-links d-flex flex-wrap gap-3">
            <a href="" className="text-white text-decoration-underline">
              Track account opening
            </a>
            <a href="" className="text-white text-decoration-underline">
              Track segment activation
            </a>
            <a href="" className="text-white text-decoration-underline">
              Intraday margins
            </a>
            <a href="" className="text-white text-decoration-underline">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-white mb-3 " id="featured">Featured</h4>
          <ol className="text-white ">
            <li>
              <a href="" className="text-white text-decoration-underline ">
                Surveillance measure on scrips - June 2025
              </a>
            </li>
            <li>
              <a href="" className="text-white text-decoration-underline ">
                Rights Entitlements listing in June 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
