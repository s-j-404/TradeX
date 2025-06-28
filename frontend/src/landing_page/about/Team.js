import React from 'react';
function Team() {
    return (
      <div className="container p-5 border-top">
        <div className="row">
          <div className="col-5">
            <div className="row pt-5 p-4">
              <img
                src="media/images/nithinkamath.jpg"
                style={{
                  borderRadius: "100%",
                  width: "80%",
                  paddingTop: "10px",
                }}
              />
            </div>
          </div>
          <div className="col-7">
            <h2>People</h2>
            <p className="pt-5" style={{ fontSize: "17px" }}>
              <p className="pt-3">
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
                <br />
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
                <br />
              </p>
              <p>
                Playing basketball is his zen.
                <br />
              </p>
              <p>
                Connect on{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  Homepage
                </a>{" "}
                /{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  TradingQnA
                </a>{" "}
                /{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  Twitter
                </a>
                <br />
              </p>
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
}

export default Team;