export default function Slots({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val2 === val3;
  return (
    <>
      <h1>
        {val1} {val2} {val3}
      </h1>
      <h2 style={{ color: isWinner ? 'green' : 'red' }}>
        {isWinner ? 'You win!' : 'You lose!'}
      </h2>
      {isWinner && <h3 style={{ color: 'goldenrod' }}>Congrats!</h3>}
    </>
  );
}

// export default function Slots({ val1, val2, val3 }) {
//   const isWinner = val1 === val2 && val2 === val3;
//   if (isWinner) {
//     return (
//       <>
//         <h1>
//           {val1} {val2} {val3}
//         </h1>
//         <h2 style={{ color: 'green' }}>You won!</h2>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h1>
//           {val1} {val2} {val3}
//         </h1>
//         <h2 style={{ color: 'red' }}>You lose!</h2>
//       </>
//     );
//   }
// }
