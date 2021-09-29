import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Container } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import api from "../redux/api";
const AdminChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProfit = async () => {
      const res = await api.get("/users/profit");
      setData(res.data.data);
    };
    fetchProfit();
  }, []);

  const [chart, setChart] = useState({
    series: [
      {
        name: "Net Profit",
        data: data.profit,
      },
      {
        name: "Revenue",
        data: data.revenue,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  useEffect(() => {
    setChart({
      series: [
        {
          name: "Net Profit",
          data: data.profit,
        },
        {
          name: "Revenue",
          data: data.revenue,
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    });
  }, [data]);

  return (
    <Container
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      {/* <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
        />
      </div> */}
      <ReactApexChart
        responsive={true}
        options={chart.options}
        series={chart.series}
        type="bar"
        width="700"
      />
    </Container>
  );
};

export default AdminChart;
