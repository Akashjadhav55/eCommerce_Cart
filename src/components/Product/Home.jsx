import React from "react";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Inc, Dec } from "../redux/redux"

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const [colourRed, setColourRed] = useState("")
  const [colourBlue, setColourBlue] = useState("")
  const [colourGreen, setColourGreen] = useState("")
  // const [colourState, setStateColour] = useState("")
  // const [colourState, setStateColour] = useState("")

  // const dispatch = useDispatch()
  // const counter = useSelector((state) => state)

  // const filterData = () =>{
  //   console.log("click")
  //   let SortData = data.sort((a,b) => {
  //      console.log(a.price)
  //      return b.price - a.price
  //     })
  //   setData([...SortData])
  // }

  // getData()

  // }
  const getData = () => {
    fetch(
      "https://fake-store-api-41bw.onrender.com/product"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  console.log(colourRed)

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.mainDiv}>
      <div className={styles.sorting}>
        <div>
          <h3>Colour</h3>
          <div>
          <input type="checkbox" value={colourRed} onChange={(e) => setColourRed(e.target.value)} ></input>
          <label>Red </label>
          </div>
          {/* <div>
          <input type="checkbox" value={} set ></input>
          <label>Blue </label>
          </div>
          <div>
          <input type="checkbox" value={} set ></input>
          <label>Green </label>
          </div> */}
        
        
        </div>
        
      </div>
      <div className={styles.products}>
        {data.map((product) => (
          <div key={product.id} className={styles.outerDiv}>
            <h2 className={styles.productName}>{product.title}</h2>
            <img src={product.image} className={styles.img} />
            <div className={styles.innerDiv}>
              <p>Rs. {product.price}</p>
              <button
                className={styles.button}
                onClick={() => navigate(`/cart/${product.id}`)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
