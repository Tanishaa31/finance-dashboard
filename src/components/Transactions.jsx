import { useState } from "react";
import TransactionCard from "./TransactionCard";

const Transactions = ({ role }) => {
  const [search, setSearch] = useState("");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
    { id: 3, date: "2026-04-03", amount: 1000, category: "Shopping", type: "expense" },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  // 🔍 Filter
  const filtered = transactions.filter(item =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // ➕ Add Transaction
  const handleAdd = () => {
    if (!form.amount || !form.category || !form.date) return;

    const newTransaction = {
      id: Date.now(),
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
      date: form.date,
    };

    setTransactions([newTransaction, ...transactions]);
    setShowModal(false);

    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">

      <h2 className="text-xl font-bold mb-3">Transactions</h2>

      {/* Admin Button */}
      {role === "admin" && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded mb-3 hover:bg-blue-600 transition"
        >
          + Add Transaction
        </button>
      )}

      {/* Search */}
      <input
        type="text"
        placeholder="Search by category..."
        className="border p-2 mb-4 w-full rounded focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* List */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <p className="text-gray-500">No transactions found</p>
        )}

        {filtered.map(item => (
          <TransactionCard key={item.id} item={item} />
        ))}
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          
          <div className="bg-white p-6 rounded shadow w-80">
            <h3 className="font-bold mb-3">Add Transaction</h3>

            <input
              type="number"
              placeholder="Amount"
              className="border p-2 w-full mb-2 rounded"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />

            <input
              type="text"
              placeholder="Category"
              className="border p-2 w-full mb-2 rounded"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <input
              type="date"
              className="border p-2 w-full mb-2 rounded"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <select
              className="border p-2 w-full mb-3 rounded"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <div className="flex justify-between">
              <button
                onClick={handleAdd}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Add
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default Transactions;