function Skills({ skills }) {
  return (
    <div className="skills">
      <p>Skills</p>
      <hr />
      {skills?.map((data, i) => {
        return (
          <div key={i}>
            <div className="row">
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
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
}

export default Skills;
