export default function ListPicker({ values }) {
  const randomIdx = Math.floor(Math.random() * values.length);
  const randElement = values[randomIdx];
  return (
    <div>
      <p>The list of values: {values}</p>
      <p>Random element: {randElement}</p>
    </div>
  );
}
