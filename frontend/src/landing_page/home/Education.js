import React from 'react';
function Education() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mb-5">
            <img
              src="media/images/education.svg"
              alt="edu-photo"
              className="img-fluid"
                style={{ maxWidth: "75%", height: "auto" }}
            />
          </div>

          <div className="col-6 mt-5 mb-5">
            <h1 className='mb-3 fs-2 text-muted'>
              Free and open market education
            </h1>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="text-decoration-none text-primary fw-medium"
            >
              Varsity
              </a>

            <p className='mt-4'>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="#"
              className="text-decoration-none text-primary fw-medium "
            >
              TradingQ&A{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Education;