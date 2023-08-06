import React, {useState, useEffect } from "react";

import Jobd from "../jobprofile/Jobdata";

export default function NotFound() {
  const [dat, setDat] = useState([]);
  useEffect(() => {
	fetch("https://oct-epf5.vercel.app/")
      .then((res) => res.json())
      .then((responses) =>  setDat([responses.data]))		
	},[]);


	return (
	<>
      {dat.map((item,index) => {
        return (
          <>
		  <div key={index}> 
            <Jobd  jobdatas = {item.jobData}   activetype = {item.type} />
		  </div>
          
          </>
        );
      })}
    </>
  );
}
