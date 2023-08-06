import React, { useEffect, useState } from "react";
import "./style.css";
export default function Jobdata({ jobdatas, activetype }) {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("recent");
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        default: "default",
        name: "name",
        recent: "recent",
        // applied: "applied"
      };
      const sortProperty = types[type];
      console.log(sortProperty);
      // console.log("bands", ...bands);
      // const sorted = [...jobdatas].sort(
      //   (a, b) => b[sortProperty] - a[sortProperty]
      // );

      if (sortProperty === "default") {
        return setData([...jobdatas]);
      }
      const sorted = [...jobdatas].sort((a, b) => {
        if (sortProperty === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      console.log("sortex", sorted);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div>
      <div className="activejobscontainer">
        <div className="activetypejobs">
          <p >{activetype}</p>
        <select onChange={(e) => setSortType(e.target.value)}>
          {/* <option value="dateFormat">dateFormat</option> */}
          <option value="default">default</option>
          <option value="name">name</option>
          <option value="recent">recent</option>
        </select>
        </div>
      </div>

      {data.map((items, index) => {
        return (
          <>
            <div className="containers" key={index}>
              <div className="jobgeneric-sidline"></div>
              <div className="job-homepage">
                <div>
                  <p className="jobname">{items.name}</p>
                </div>
                <div>
                  <p className="jobgeneric">
                    location : {items.location[0]}, {items.location[1]}{" "}
                  </p>
                </div>

                <div className="job-homepage">
                  <div className="jobgeneric">
                    <div className="job-status">
                      <p className="d">posted: {items.posted}</p>
                      <p className="d">status: {items.status}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="job-homepage">
                <p className="jobgeneric">{items.applied} Applied</p>
              </div>

              <div className="job-homepage">
                <p className="jobgeneric">{items.jobViews} job views</p>
              </div>

              <div className="job-homepage">
                <p className="jobgeneric">{items.daysLeft} days left</p>
                <p>
                  {" "}
                  {items.daysLeft === 2 ? (
                    <p className="daysleftcolorred">
                      Get more application by extending this job post.{" "}
                    </p>
                  ) : items.daysLeft === 7 ? (
                    <p className="daysleftcolorgreeen">
                      Get more application by extending this job post.{" "}
                    </p>
                  ) : (
                    <p className="daysleftcoloryellow">
                      {" "}
                      You are getting better visibility as this is a premium job
                      post.{" "}
                    </p>
                  )}{" "}
                </p>
              </div>

              <div className="job-homepage">
                <div className="jobgeneric">
                  <button className="seeApplicationJob">
                    {" "}
                    see application{" "}
                  </button>
                </div>
              </div>
              <div className="job-homepage">
                <div className="jobgeneric">
                  <select>
                    <option>Action</option>
                    <option>Reject</option>
                    <option>Accept</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
