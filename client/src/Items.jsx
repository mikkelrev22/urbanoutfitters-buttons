import React from "react";
import Colors from "./Colors.jsx";
import Sizes from "./Sizes.jsx";

const Items = (props) => {
  return (
    <div>
      {
        props.data.map((item, i) => {
          return ( 
            <div className="all" key={i} id={`${item.id}`}>
                <p className="words"> {item.name} </p>
                <p className="words"> {item.price}</p>
                <div className="AP"> 
                  <p className="afterPay"> Available on orders $35.00–$1,000.00 by </p>
                  {/* <button className="APimage"> <img src="https://theme.zdassets.com/theme_assets/605518/8174f9dafeeca2bfc64a4eda91d256aafcc9f0c0.png"></img></button> */}
                  <input className="APimage" type="image" src="https://theme.zdassets.com/theme_assets/605518/8174f9dafeeca2bfc64a4eda91d256aafcc9f0c0.png" />
                </div>
                <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733; 4.7 | 34 Reviews</div>
                <div className="colors">
                  <p className="wordColor">Color: </p>
                  <p className="wordColorPlace"> placeholder for color </p>
                </div>
                <Colors colors={item.colors}/>
                <p className="wordSize">Size:</p>
                <Sizes sizes={item.sizes}/>
                <div className="sizeGuideCont">
                    <a className="sizeGuide" href="https://cdn.shopify.com/s/files/1/1230/9232/files/Size_Chart_General_47015b27-860c-43f3-b2aa-0c701038dbe5.png?9407381415185995239">Size Guides</a>
                </div>
                <div className="qtyCont">
                    <p className="qty">Qty:</p>
                    <select className="qtyOptions">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
                <div className="shipToMe" > <button className="shipToMeButt"> </button> Ship to Me </div>
                <div className="inStorePickUp" > <button className="inStorePickUpButt"> </button> In-Store Pickup </div>
                <div className="addButtonCont"> <button className="addToBag"> Add to Bag </button> </div>
                <p className="details"> Details: {item.description}</p>
                <p className="shipReturns"> shipping + returns </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Items;





