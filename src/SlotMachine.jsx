export default function SlotMachine({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val1 === val3;
  return (
    <>
      <div style={{ color: isWinner ? "green" : "red" }}>
        <h1>
          {val1} {val2} {val3}
        </h1>
        <h2> {isWinner ? "You win!" : "You lose!"}</h2>
      </div>
      {isWinner && <h3>Congrats</h3>}
    </>
  );
}
