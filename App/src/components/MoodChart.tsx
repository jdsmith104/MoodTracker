import { useEffect, useState } from 'react';
import './Chart.css';
import { Line } from "react-chartjs-2";

interface ContainerProps {
    userId: string;
    updateChart: Boolean;
    setUpdateChart: Function;
}



const MoodChart: React.FC<ContainerProps> = ({ userId: userId, updateChart: updateChart, setUpdateChart: setUpdateChart }) => {
    function getChartData(userId: string) {
        return { "x": Array(6).fill(1).map(() => String(Math.round(Math.random() * 40))), "y": Array(6).fill(1).map(() => Math.round(Math.random() * 40)) };
    }

    const [data, setDataArray] = useState({
        // X-axis data
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                // Title of chart
                label: 'Mood scores',
                // Y-axis data
                data: [12, 19, 3, 5, 2, 3],
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
        if (updateChart === true) {
            setUpdateChart(false);
            console.log("State is true, setting false");
            // make get request with userId
            const chartData = getChartData(userId);
            console.log(chartData.x, chartData.y);
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
