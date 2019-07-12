import React from "react";

const Sizes = (props) => {
  return (
    <div>
      {
        props.sizes.map((size, i) => {
          return (
            <div className="sizeCont" key={i}>
              <button className="size">{size}</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Sizes;

