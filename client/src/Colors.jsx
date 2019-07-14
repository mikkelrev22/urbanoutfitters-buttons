import React from "react";

const Colors = (props) => {
  return (
    <div>
      {
        props.colors.map((color, i) => {
          return (
            <div className="colorCont" key={i}>
              <button onClick={props.changeColor} className="color" style={{backgroundColor: color}} value={color} ></button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Colors;

