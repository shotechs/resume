function Skills({ skills }) {
  return (
    <div className="skills">
      <p>Skills</p>
      <hr />

       <div className="row2">
      {skills?.map((data, i) => {
        return (
          <div className="row" key={i}>
           
              <div className="column">
                <div className="skillName">{data.name}</div>
              </div>
              <div className="column">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: data.progress + "%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {data.progress + "%"}
                  </div>
                </div>
              </div>
            </div>
        
        );
      })}  </div>
      <br />
    </div>
  );
}

export default Skills;
