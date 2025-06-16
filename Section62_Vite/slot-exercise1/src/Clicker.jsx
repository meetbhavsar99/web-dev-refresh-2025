export default function Clicker({ message, buttonText }) {
  return (
    <form>
      <button onClick={() => alert(message)}>{buttonText}</button>
    </form>
  );
}
