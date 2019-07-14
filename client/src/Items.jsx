import React from "react";
import Colors from "./Colors.jsx";
import Sizes from "./Sizes.jsx";
import { Button, Accordion, Card } from 'react-bootstrap';

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
                  <p className="afterPay"> Available on orders $35.00–$1,000.00 by afterPay</p>
                </div>
                <div className="stars">&#9733; &#9733; &#9733; &#9733; &#9733; 4.7 | 34 Reviews</div>
                <div className="colors">
                  <p className="wordColor">Color: </p>
                </div>
                <Colors changeColor={props.changeColor} colors={item.colors}/>
                <p className="wordSize">Size:</p>
                <Sizes changeSize={props.changeSize} sizes={item.sizes}/>
                <div className="sizeGuideCont">
                    <a className="sizeGuide" href="https://cdn.shopify.com/s/files/1/1230/9232/files/Size_Chart_General_47015b27-860c-43f3-b2aa-0c701038dbe5.png?9407381415185995239">Size Guides</a>
                </div>
                <div className="qtyCont">
                    <p className="qty">Qty:</p>
                    <select onChange={props.changeQty} className="qtyOptions">
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
                <div className="addButtonCont"> <button onClick={props.display} onClick={props.addToBag} className="addToBag"> Add to Bag </button> </div>

                <Accordion className="accordion" defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>{item.description}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Shipping + Returns
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Free pre-paid returns and exchanges for orders shipped to the US. Get refunded faster with easy online returns and print a FREE pre-paid return SmartLabel® online! Return or exchange any unused or defective merchandise by mail or at one of our US or Canada store locations. Made to order items cannot be canceled, exchanged or returned.
                        Visit Returns + Exchanges for more information on completing a return.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
            </div>
          )
        })
      }
    </div>
  )
}

export default Items;








