import React from "react";

function Portfolio({ portfolios }) {
  return (
    <div className="portfolio">
      <p>Portfolio</p>
      <hr />
      {portfolios?.map((data, i) => {
        return (
          <div className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" key={i}>
            🔗 
            <a
              href={"http://" + data.site}
              target="_blank"
              rel="noreferrer"
              className="site"
            >
              {data.site}
            </a>
            <div className="tech_used">
              {data.tech_used.map((data2, i) => {
                return (
                  <span key={i} className="badge bg-secondary mr-5">
                    {data2}
                  </span>
                );
              })}
            </div>
            <div className="describe">{data.describe}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
