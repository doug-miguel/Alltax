import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import "./apexcharts.css"

function ApexCharts() {
  const [colums1, setColums1] = useState('comida')
  const [colums2, setcolums2] = useState('comida')
  const [temp1, setTemp1] = useState([])
  const [temp2, setTemp2] = useState([])
  const [value1, setValue1] = useState([])

  function handleChange({ target }) {
    setColums1(target.value)
    generateNumber()
  }

  function handleChangeColumns2({ target }) {
    setcolums2(target.value)
    generateNumber()
  }

  function generateNumber() {
    setValue1([
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50)
    ])
  }

  useEffect(() => {
    if (colums1 === "comida") {
      setTemp1(["Frutas", "Legumes", "Verduras"])
      setTemp2(["Abacaxi", "Morango", "Uva"])
      if (colums2 === "Frutas") {
        setTemp2(["Abacaxi", "Morango", "Uva"])
      }
      if (colums2 === "Legumes") {
        setTemp2(["Abobora", "Cenoura", "Tomate"])
      }
      if (colums2 === "Verduras") {
        setTemp2(["Alface", "Couve", "Salsao"])
      }
    }


    if (colums1 === "roupa") {
      setTemp1(["Calça", "Camisa", "Vestido"])
      setTemp2(["Calça1", "Calça2", "Calça3"])

      if (colums2 === "Calça") {
        setTemp2(["Calça1", "Calça2", "Calça3"])
      }
      if (colums2 === "Camisa") {
        setTemp2(["Camisa1", "Camisa2", "Camisa3"])
      }
      if (colums2 === "Vestido") {
        setTemp2(["Vestido1", "Vestido2", "Vestido3"])
      }

    }


    if (colums1 === "dia") {
      setTemp1(["Manha", "Tarde", "Noite"])
      setTemp2(["Manha1", "Manha2", "Manha3"])

      if (colums2 === "Manha") {
        setTemp2(["Manha1", "Manha2", "Manha3"])
      }
      if (colums2 === "Tarde") {
        setTemp2(["Tarde1", "Tarde2", "Tarde3"])
      }
      if (colums2 === "Noite") {
        setTemp2(["Noite1", "Noite2", "Noit3"])
      }

    }
    generateNumber()
  }, [colums1, colums2])


  const options1 = {
    options: {
      plotOptions: {
        bar: {
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: temp1,
      },
    }
  }

  const series = {
    series: [{
      name: 'Net Profit',
      data: value1
    }]
  }

  return (
    <section className="mixed-chart">
      <nav>
        <select onChange={() => handleChange(event)}>
          <option value="comida">Comida</option>
          <option value="roupa">Roupa</option>
          <option value="dia">Temperatura</option>
        </select>
        <select onChange={() => handleChangeColumns2(event)}>
          {temp1.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <select onChange={() => generateNumber()}>
          {temp2.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </nav >
      <div className="apex">
        <Chart
          options={options1.options}
          series={series.series}
          type="bar"
          width="500"
        />
      </div>
    </section >
  );
}

export default ApexCharts;