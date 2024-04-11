import React from "react";

export default function Colorboxes() {
  let arr = [];
  for (let index = 0; index <= 9; index++) {
    return arr.push(<div> index </div>);
  }

  return (
    <>
      <div className="">{arr}</div>
    </>
  );
}
