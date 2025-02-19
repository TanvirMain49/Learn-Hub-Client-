import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TotalRevenue() {
    const [revenueByMonth, setRevenueByMonth] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/total-revenue-by-month")
            .then((response) => response.json())
            .then((data) => setRevenueByMonth(data))
            .catch((error) => console.error("Error fetching revenue data:", error));
    }, []);

    const chartData = {
        labels: revenueByMonth?.map((item) => item._id),
        datasets: [
            {
                label: "Revenue",
                data: revenueByMonth.map((item) => item.total),
                backgroundColor: "rgba(75,192,192,0.6)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            }
        },
    };

    return (
        <div className="mt-4 w-[50%] shadow-xl pt-10 pb-14 px-5">
            <h1 className="text-lg font-bold">Revenue</h1>
            {revenueByMonth.length > 0 ? (
                <Bar data={chartData} options={options} />
            ) : (
                <p>Loading revenue data...</p>
            )}
        </div>
    );
}
