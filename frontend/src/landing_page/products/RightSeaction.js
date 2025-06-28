import React from 'react';
function RightSection({
  imageURL,
  productName,
  productDescription,
  customLink,
}) {
  return (
    <div className="container mt-5" style={{ marginBottom: "100px" }}>
      <div className="row">
        <div className="col-5 p-5" style={{ marginTop: "100px"}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {customLink && customLink} {/* Only render if provided */}
          </div>
        </div>
        <div className="col-7 p-2 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;