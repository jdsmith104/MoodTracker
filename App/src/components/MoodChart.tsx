import { useEffect, useState } from 'react';
import './Chart.css';
import { Line } from "react-chartjs-2";

interface ContainerProps {
    userId: string;
    updateChart: Boolean;
    setUpdateChart: Function;
}



const MoodChart: React.FC<ContainerProps> = ({ userId, updateChart, setUpdateChart }) => {
    function getChartData(userId: string) {
        // Get x and y data from database for a user
        // format and return data
        return { "x": Array(6).fill(1).map(() => String(Math.round(Math.random() * 40))), "y": Array(6).fill(1).map(() => Math.round(Math.random() * 40)) };
    }

    const [data, setDataArray] = useState({
        // X-axis data
        labels: ["0"],
        datasets: [
            {
                // Title of chart
                label: 'Mood scores',
                // Y-axis data
                data: [0],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    });

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    useEffect(() => {
        // Called when the updateChart state is modified by parent
        // Updates the chart data using the getChartData method
        // TODO: error checking
        if (updateChart === true) {
            setUpdateChart(false);
            // make get request with userId
            const chartData = getChartData(userId);
            setDataArray({
                // X-axis data
                labels: chartData.x,
                datasets: [
                    {
                        // Title of chart
                        label: 'Mood scores',
                        // Y-axis data
                        data: chartData.y,
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                    },
                ],
            });
        }
    }, [updateChart]);

    return (
        <div>
            <p>{userId}</p>
            <Line data={data} options={options}></Line>

        </div>

    );
};

export default MoodChart;
