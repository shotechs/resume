function Topic({ topics }) {
  return (
    <div className="topic">
      <h4>Tech Used</h4>
      <div className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
        {topics?.map((data, i) => {
          return (
            <div className="card" key={i}>
              <h5 className="card-header">{data.name}</h5>
              <ul className="card-text">
                {data.lists.map((data2, i) => {
                  return <li key={i}>{data2}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
}

export default Topic;
