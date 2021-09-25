import "./CounterValue.css";

function CounterValue(props){
    const { counter } = props;
    return (
        <div className="counterValue">
            <h5 className="counterHeading">Counter value</h5>
            <p>{counter}</p>
        </div>
    )
}
export default CounterValue;