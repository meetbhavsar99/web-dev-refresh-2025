function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log('Submitted the form!');
}

export default function Form() {
  return (
    <form>
      <button onClick={handleFormSubmit}>Click</button>
    </form>
  );
}
