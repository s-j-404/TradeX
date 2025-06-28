import React from "react";

function Brokerage() {
  return (
    <div className="container p-5" style={{ marginBottom: "100px", marginTop:"110px" }}>
      <h2 style={{ marginBottom: "20px" }}>Charges for account opening</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "16px",
                backgroundColor: "#f9f9f9",
                borderBottom: "1px solid #ddd",
              }}
            >
              Type of account
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "16px",
                backgroundColor: "#f9f9f9",
                borderBottom: "1px solid #ddd",
              }}
            >
              Charges
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { type: "Online account", charge: "FREE" },
            { type: "Offline account", charge: "FREE" },
            { type: "NRI account (offline only)", charge: "₹ 500" },
            {
              type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
              charge: "₹ 500",
            },
          ].map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "16px",
                  borderBottom: "1px solid #ddd",
                  backgroundColor: index % 2 !== 0 ? "#f9f9f9" : "transparent",
                }}
              >
                {row.type}
              </td>
              <td
                style={{
                  padding: "16px",
                  borderBottom: "1px solid #ddd",
                  backgroundColor: index % 2 !== 0 ? "#f9f9f9" : "transparent",
                }}
              >
                {row.charge === "FREE" ? (
                  <span
                    style={{
                      backgroundColor: "#28a745",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      display: "inline-block",
                    }}
                  >
                    FREE
                  </span>
                ) : (
                  row.charge
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Brokerage;
