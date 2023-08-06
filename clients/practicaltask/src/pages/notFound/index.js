import React, { useEffect } from "react";
import { useState } from "react";
// import Jobd from "../jobdatas/Jobdata";
import Activejobdata from "../jobdatas/Activejobdata";
export default function NotFound() {
  const [dat, setDat] = useState([]);
  useEffect(() => {
	fetch("https://oct-epf5.vercel.app/")
      .then((res) => res.json())
      .then((responses) =>  setDat([responses.data]))		
	},[]);


	return (
    // <h2 style={{textAlign: 'center'}}> </h2>
	<>
      {dat.map((item,indexes) => {
        // console.log("item ", item);
        return (
          <>
            <Activejobdata activetype = {item.type} jobdatassort = {item.jobData} indexes={indexes} />
            {/* <Jobd  jobdatas = {item.jobData}   activetype = {item.type} /> */}
          
          </>
        );
      })}
    </>
  );
}
