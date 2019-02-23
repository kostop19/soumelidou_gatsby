import React from "react";

const PageLayout = ({ children, backgroundColor, title }) => {
  return (
    <div>
      <div style={{ height: "200px", backgroundColor: backgroundColor, display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div className="container">
          <div>
            <h1 style={{ color: "white" }}>{title}</h1>
            <div
              style={{
                width: "45px",
                backgroundColor: "white",
                height: "4px",
                margin: " 0.2em 0px 0.5em"
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  );
};

export default PageLayout;
