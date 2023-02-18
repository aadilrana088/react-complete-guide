import './Chart.css';
import ChartBar from './ChartBar';
const Chart = ({ dataPoints }) => {
    const dataPointsValue = dataPoints.map((item) => item.value);
    const totalMaximum = Math.max(...dataPointsValue);
    console.log(dataPoints);
    console.log(totalMaximum);
    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
