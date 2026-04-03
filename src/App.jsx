import { useState } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Transactions from "./components/Transactions";
import Charts from "./components/Charts";
import Insights from "./components/Insights";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar setRole={setRole} />
      <SummaryCards />
      <Transactions role={role} />
      <Charts />
      <Insights />
    </div>
  );
}

export default App;