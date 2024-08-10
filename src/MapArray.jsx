export default function MapArray({ arr }) {
  return (
    <ul>
      {arr.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
}
