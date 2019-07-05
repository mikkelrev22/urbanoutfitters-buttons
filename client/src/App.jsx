import React from 'react'

class App extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
    
    render() {
      return (
        <div className="all">
          <div className="words">
            <p> J. Cole Dreamville Tee </p>
            <p> $28.00 </p>
          </div>
          <p className="afterPay">Available on orders $35.00–$1,000.00 by AfterPay</p>
          <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733; 4.7 | 34 Reviews</span>
          <div className="color">
            <p className="colorWord"> Color: Black</p>
            <button>black</button> 
            <button>white</button>
          </div>
          <div className="size">
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <div className="sizeGuid">
            <a href="https://cdn.shopify.com/s/files/1/1230/9232/files/Size_Chart_General_47015b27-860c-43f3-b2aa-0c701038dbe5.png?9407381415185995239">Size Guide</a> 
            <p>|</p>
            <a href="http://www.yahoo.com">Customers Say: True to Size</a> 
          </div>
          <div className="qty">
            <p>Qty:</p>
            <select className="qty">
              <option value="0">0</option>
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
          <p> details</p>
          <p> shipping + returns </p>
        </div>
      )
    }
  }

export default App

