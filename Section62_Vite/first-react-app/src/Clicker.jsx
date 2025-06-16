function handleClick() {
  console.log('I was CLICKED!');
}

export default function Clicker() {
  return (
    <div>
      <p onMouseOver={handleClick}>Hover on me</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
