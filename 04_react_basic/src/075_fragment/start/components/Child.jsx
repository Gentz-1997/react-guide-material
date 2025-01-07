import "./Child.css";
import {Fragment} from "react";

const Child = () => {
  return (
    <Fragment key="1">
      <div className="component">
      <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum doloremque incidunt esse odit, atque obcaecati aut vero? Aliquid qui suscipit odit itaque, accusamus, nemo deleniti eveniet recusandae praesentium sequi numquam?</p>
    </Fragment>
  );
};

export default Child;
