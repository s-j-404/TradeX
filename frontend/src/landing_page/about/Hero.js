import React from 'react';
function Hero() {
    return (
      <div className="container p-5">
        <p
          className=" mt-5 p-5 "
          style={{
            textAlign: "center",
            fontSize: "32px",
            WebkitTextDecorationColor: "#424242",
            fontFamily: "Inter",
          }}
        >
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </p>
        <div className="container pt-5 mt-5 pl-md-3 border-top" style={{textDecorationColor:"#424242"}}>
          <div className="row mt-5 gx-5">
            <div className="col-1"></div>
            <div className="col-md-5">
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  lineHeight: "1.8",
                }}
              >
                <p>
                  We kick-started operations on the 15th of August, 2010 with
                  the goal of breaking all barriers that traders and investors
                  face in India in terms of cost, support, and technology. We
                  named the company Zerodha, a combination of Zero and "Rodha",
                  the Sanskrit word for barrier.
                </p>

                <p>
                  Today, our disruptive pricing models and in-house technology
                  have made us the biggest stock broker in India.
                </p>
                <p>
                  Over 1.6+ crore clients place billions of orders every year
                  through our powerful ecosystem of investment platforms,
                  contributing over 15% of all Indian retail trading volumes.
                </p>
              </p>
            </div>
            <div className="col-5 pl-md-3">
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  lineHeight: "1.8",
                }}
              >
                <p>
                  In addition, we run a number of popular open online
                  educational and community initiatives to empower retail
                  traders and investors.
                </p>

                <p>
                  Rainmatter, our fintech fund and incubator, has invested in
                  several fintech startups with the goal of growing the Indian
                  capital markets.
                </p>

                <p>
                  And yet, we are always up to something new every day. Catch up
                  on the latest updates on our blog or see what the media is
                  saying about us or learn more about our business and product
                  philosophies.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;