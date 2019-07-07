import React from "react";

const Items = (props) => {
  return (
    <div>
      {
        props.data.map((item, i) => {
          return (
            <div className="all" key={i} id={`${item.id}`}>
                <div className="words">
                    <p> {item.name} </p>
                    <p> {item.price} </p>
                </div>
                <p className="afterPay">Available on orders $35.00–$1,000.00 by AfterPay</p>
                <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733; 4.7 | 34 Reviews</div>
                <div className="color"> <button> {item.colors} </button>  </div>
                <div className="color"> <button> {item.sizes} </button>  </div>
                <div className="container">
                    <a href="https://cdn.shopify.com/s/files/1/1230/9232/files/Size_Chart_General_47015b27-860c-43f3-b2aa-0c701038dbe5.png?9407381415185995239">Size Guide</a> 
                    <p>|</p>
                    <a href="http://www.yahoo.com">Customers Say: True to Size</a> 
                </div>
                <div className="qty">
                    <p>Qty:</p>
                    <select className="qty">
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
                <div className="shipping">
                    <button>Ship to Me</button>
                    <button>In-Store Pickup</button>
                </div>
                <button > ADD TO BAG </button>
                <p> Details: {item.description}</p>
                <p> shipping + returns </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Items;





