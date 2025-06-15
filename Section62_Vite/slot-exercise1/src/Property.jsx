import PropertyList from './PropertyList';

function Property({ name, rating, price }) {
  return (
    <li className="d-flex flex-column gap-4 mr-5">
      <h2 className="mb-4">{name}</h2>
      <h3 className="mb-4">${price} a night</h3>
      <h4>{rating}⭐️</h4>
    </li>
  );
}

export default Property;
