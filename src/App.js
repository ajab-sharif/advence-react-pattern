import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <Counter.Label>Count</Counter.Label>
        <Counter.Decrease icon='-' />
        <Counter.Count />
        <Counter.Increase icon='+' />
      </Counter>
    </div>
  );
}
