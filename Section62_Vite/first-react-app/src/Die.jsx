export default function Die({ numSides = 6 }) {
  const dieRoll = Math.floor(Math.random() * numSides) + 1;
  return (
    <p>
      {numSides}-sided Die rolled, {dieRoll}
    </p>
  );
}
