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
      };
      const sortProperty = types[type];

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
                  <p className="job-name">{items.name}</p>
                </div>
                <div>
                  <p className="jobgeneric">
                    location : {items.location[0]}, {items.location[1]}{" "}
                  </p>
                </div>

                <div className="job-homepage">
                  <div className="jobgeneric">
                    <div className="job-status">
                      <p className="job-posted-status">posted: {items.posted}</p>
                      <p className="job-posted-status">status: {items.status}</p>
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
                {/* <p className="jobgeneric">{items.daysLeft} days left</p> */}
                <p>
                  {" "}
                  {items.daysLeft === 2 ? (
                    <div>
                     <span className="daysleftcolorred">Free* {items.daysLeft} Days Left</span> 
                     <p className="jobgeneric"> Get more application by extending this job post.{" "}</p>
                    </div>
                  ) : items.daysLeft === 7 ? (
                    // Get more application by extending this job post.{" "}
                    <div>
                    <span className="daysleftcolorgreeen">Free* {items.daysLeft} Days Left</span> 
                     <p className="jobgeneric"> Get more application by extending this job post.{" "} </p>
                      
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <span className="daysleftcoloryellow">Premium* {items.daysLeft} Days Left</span> 
                     <p className="jobgeneric"> You are getting better visibility as this is a premium job
                       post.{" "}
                       </p>
                      
                    </div>
                  )}{" "}
                </p>
              </div>

              <div className="job-homepage">
                <div className="jobgeneric">
                  <button className="see-Application-Job-btn">
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
