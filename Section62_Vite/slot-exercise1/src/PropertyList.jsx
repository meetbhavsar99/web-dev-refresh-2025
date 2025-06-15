import Property from './Property';

function PropertyList({ properties }) {
  return (
    <>
      <ul className="d-flex flex-row">
        {properties.map((p) => (
          <Property key={p.id} {...p} />
        ))}
      </ul>
    </>
  );
}

export default PropertyList;
