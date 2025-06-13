export default function Greeter({ name = 'everyone', from = 'Meet' }) {
  //   console.log(props.name);
  return (
    <>
      <h1>Hi there, {name}!</h1>
      <h2>- {from}</h2>
    </>
  );
}
