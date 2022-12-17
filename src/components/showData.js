// function showData() {
//   return (
//     <div>showData</div>
//   )
// }

// export default showData

import React, { useState, useEffect } from "react";
// import {Grid,Row,Col,Button} from 'reactstrap';
// import { Container, Row, Col, Button } from "react-bootstrap";

import axios from "axios";

function FetchData() {
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const data1 = res.data;
        console.log(data1);
        setData(data1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
   
    <div className="container">
      <div className="row">
        {data.map((item) => {
          return (
            <>
              <div className="col-sm-4">
                <div className="card">
                  <img className="" style={{ width: "200px" }}  src={item.image} alt="Card image cap" />
                  <div className="card-body" >
                    <h5 className="card-title"> {item.title}
                    </h5>
                    <h5 className="text-center"> Price:-{item.price} INR</h5>
                    
                    <h5 className="text-center">Rating:- {item.rating.rate}</h5>
                    <h5 className="text-center">Count {item.rating.count}</h5>
                    <p className="">{item.description}
                    {showMore ? item.description : `${item.description.slice(0,100)}`}
                    <button className="btn text-primary" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default FetchData;

