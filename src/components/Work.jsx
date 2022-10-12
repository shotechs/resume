import React from "react";

function Work({ works }) {
  return (
    <div className="work">
      <h2>Employment</h2>
      {works?.map((data, i) => {
        return (
          <div className="" key={i}>
            <h4 className="company1">
              {data.company1} : {data.company2} : {data.start_date} -
              {data.end_date}
            </h4>
            <h4>{data.jobTitle}</h4>
            <div className="describe">{data.describe}</div>
            <div className="topics">
              {data.topics.map((data2, i) => {
                return (
                  <span key={i} className="badge bg-secondary mr-5">
                    {data2}
                  </span>
                );
              })}
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Work;
