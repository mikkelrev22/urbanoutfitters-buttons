import React from "react";

const Colors = (props) => {
  return (
    <div>
      {
        props.colors.map((color, i) => {
          return (
            <div className="colorCont" key={i}>
              <button className="color">{color}</button>
              {console.log(color)}
            </div>
          )
        })
      }
    </div>
  )
}

// style={`background-color:${props.color}`}

export default Colors;

