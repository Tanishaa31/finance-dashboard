const TransactionCard = ({ item }) => {
  return (
    <div className="bg-white p-3 rounded shadow flex flex-col sm:flex-row sm:justify-between sm:items-center hover:shadow-lg transition">
      
      <div>
        <p className="font-bold">{item.category}</p>

        <p className="text-sm text-gray-500">
          {new Date(item.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      <p className={`${item.type === "income" ? "text-green-600" : "text-red-600"} mt-2 sm:mt-0`}>
        ₹{item.amount.toLocaleString("en-IN")}
      </p>
    </div>
  );
};

export default TransactionCard;