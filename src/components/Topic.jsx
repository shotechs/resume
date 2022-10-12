function Topic({ topics }) {
  return (
    <div>
      <h4>Tech Used</h4>
      {topics?.map((data, i) => {
        return (
          <div className="" key={i}>
            <div className="">{data.name}</div>
            <ul className="">
              {data.lists.map((data2, i) => {
                return <li key={i}>{data2}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Topic;
