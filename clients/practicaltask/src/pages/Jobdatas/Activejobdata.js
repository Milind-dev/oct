import React, { useEffect, useState } from "react";

export default function Activejobdata({ activetype, jobdatassort }) {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('recent');

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        daysLeft: "daysLeft",
        applied: "applied"
      };
      const sortProperty = types[type];
      console.log(sortProperty);
      // console.log("bands", ...bands);
      const sorted = [...jobdatassort].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      console.log("sortex", sorted);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="App">
     <select onChange={(e) => setSortType(e.target.value)}>
        {/* <option value="dateFormat">dateFormat</option> */}
        <option value="daysLeft">daysLeft</option>
        <option value="applied">applied</option>
      </select>

      {data.map((item,indexes) => (
        <div key={indexes} style={{ margin: '30px' }}>
          <div>{` ${item.name}`}</div>
        </div>
      ))}
    </div>
  );
}

// select reccent/name
