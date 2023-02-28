import React from "react";
import ApexCharts from "./components/apexcharts";
import Header from "./components/header";

function App() {
  return (
    <div className="mixed-chart">
      <Header />
      <ApexCharts />
    </div>
  );
}

export default App;