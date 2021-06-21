import { useEffect } from 'react';
import './Chart.css';

interface ContainerProps {
    userId: string;
    updateChart: Boolean;
    setUpdateChart: Function;
}

const Chart: React.FC<ContainerProps> = ({ userId: userId, updateChart: updateChart, setUpdateChart: setUpdateChart }) => {
    function getChartData(userId: string) {
        return [1, 2, 3, Math.random() * 50];
    }

    useEffect(() => {
        if (updateChart === true) {
            setUpdateChart(false);
            console.log("State is true, setting false");
            // make get request with userId
            const chartData = getChartData(userId);
        }
    }, [updateChart]);
    return (
        <p>{userId}</p>

    );
};

export default Chart;
