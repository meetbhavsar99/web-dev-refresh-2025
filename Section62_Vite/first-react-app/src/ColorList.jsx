export default function ColorList({ colors }) {
  return (
    <div>
      <ul>
        {colors.map((c) => (
          <li style={{ color: c }}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
