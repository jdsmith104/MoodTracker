import './Chart.css';

interface ContainerProps {
    userId: string;
}

const Chart: React.FC<ContainerProps> = ({ userId: userId }) => {

    return (
        <p>{userId}</p>
    );
};

export default Chart;
