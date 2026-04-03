import { useState } from "react";

const SummaryCards = () => {

  const transactions = [
    { amount: 5000, type: "income" },
    { amount: 2000, type: "expense" },
    { amount: 1000, type: "expense" },
  ];

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
      
      <div className="bg-green-200 p-4 rounded shadow 
hover:bg-green-500 hover:text-white 
hover:scale-105 transform transition-all duration-300 cursor-pointer">
  
        <h2 className="font-bold">Income</h2>
        <p className="text-xl">₹{income.toLocaleString()}</p>

      </div>

      <div className="bg-red-200 p-4 rounded shadow 
hover:bg-red-500 hover:text-white 
hover:scale-105 transform transition-all duration-300 cursor-pointer">

        <h2 className="font-bold">Expenses</h2>
        <p className="text-xl">₹{expense.toLocaleString()}</p>
      </div>

      <div className="bg-blue-200 p-4 rounded shadow 
hover:bg-blue-500 hover:text-white 
hover:scale-105 transform transition-all duration-300 cursor-pointer">
    
        <h2 className="font-bold">Balance</h2>
        <p className="text-xl">₹{balance.toLocaleString()}</p>
      </div>

    </div>
  );
};

export default SummaryCards;