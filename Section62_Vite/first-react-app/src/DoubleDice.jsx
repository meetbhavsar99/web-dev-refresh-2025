export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;

  const isWinner = num1 === num2;
  const styles = { color: isWinner ? 'green' : 'red' };
  return (
    <div className="DoubleDice" style={styles}>
      {isWinner && <h3>You win!</h3>}
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
}

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   return (
//     <>
//       {num1 === num2 ? <h3>You win!</h3> : null}
//       <p>Num1: {num1}</p>
//       <p>Num2: {num2}</p>
//     </>
//   );
// }

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   return (
//     <>
//       <h2>{num1 === num2 ? 'You win! ;)' : 'You lose! :('}</h2>
//       <p>Num1: {num1}</p>
//       <p>Num2: {num2}</p>
//     </>
//   );
// }

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   const result = num1 === num2 ? 'You win! ;)' : 'You lose! :(';

//   return (
//     <>
//       <h2>{result}</h2>
//       <p>Num1: {num1}</p>
//       <p>Num2: {num2}</p>
//     </>
//   );
// }
