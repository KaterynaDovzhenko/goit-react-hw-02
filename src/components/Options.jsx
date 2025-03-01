export default function Options({ onChange, onSum, onReset }) {
  return (
    <ul>
      <li>
        <button onClick={() => onChange("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => onChange("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onChange("bad")}>Bad</button>
      </li>
      {onSum > 0 && (
        <li>
          <button onClick={onReset}>Reset</button>
        </li>
      )}
    </ul>
  );
}
