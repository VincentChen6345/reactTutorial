import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const saveYearChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
    console.log(filteredYear);
    console.log("logged in Expenses.js");
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={saveYearChangeHandler}
          selected={filteredYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
