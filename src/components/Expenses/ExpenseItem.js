import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  let amount = props.amount;
  let date = props.date;
  const clickHandler = () => {
    setTitle("Hi!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
