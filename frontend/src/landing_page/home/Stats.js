import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-6 pe-md-5">
          <h1 className="fw-bold mb-4">Trust with confidence</h1>

          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">Do better with money</h2>
          <p className="text-muted mb-5">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-5 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="eco-photo"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <div className="mt-4 mb-5 d-flex justify-content-center gap-5">
            <a href="#" className="text-decoration-none text-primary fw-medium">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-decoration-none text-primary fw-medium">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
