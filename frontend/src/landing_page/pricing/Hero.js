import React from 'react';
function Hero() {
    return (
      <div>
        <div
          className="p-5"
          style={{
            textAlign: "center",
            marginTop: "90px",
            marginBottom: "100px",
          }}
        >
          <h1>Charges</h1>
          <h4 className="text-muted">List of all charges and taxes</h4>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4" style={{ marginBottom: "100px" }}>
              <img
                src="media/images/pricing0.svg"
                style={{ width: "70%", marginLeft: "60px" }}
              />
              <h2
                className="mb-4"
                style={{
                  textAlign: "center",
                  fontSize: "28px",
                  margin: "0px,0px,20px",
                }}
              >
                Free equity delivery
              </h2>
              <p
                className="text-muted"
                style={{
                  margin: "16px,0px,15px",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                All equity delivery investments (NSE, BSE), <br />
                are absolutely free — ₹ 0 brokerage.
              </p>
            </div>

            <div className="col-4" style={{ marginBottom: "100px" }}>
              <img
                src="media/images/intradayTrades.svg"
                style={{ width: "70%", marginLeft: "60px" }}
              />
              <h2
                className="mb-4"
                style={{
                  textAlign: "center",
                  fontSize: "28px",
                  margin: "0px,0px,20px",
                }}
              >
                Intraday and F&O trades
              </h2>
              <p
                className="text-muted"
                style={{
                  margin: "16px,0px,15px",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>

            <div className="col-4" style={{ marginBottom: "100px" }}>
              <img
                src="media/images/pricing0.svg"
                style={{ width: "70%", marginLeft: "60px" }}
              />
              <h2
                className="mb-4"
                style={{
                  textAlign: "center",
                  fontSize: "28px",
                  margin: "0px,0px,20px",
                }}
              >
                Free direct MF
              </h2>
              <p
                className="text-muted"
                style={{
                  margin: "16px,0px,15px",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;