import React from "react";
import { Cascader } from "antd";
import area from "./area";
function PickArea(props) {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <Cascader options={area} onChange={onChange} />
    </>
  );
}

export default PickArea;
