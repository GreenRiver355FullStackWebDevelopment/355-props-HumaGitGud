function Restaurant(props) {

  return (
    <div className="restaurant">
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <img src={props.restaurant.image} alt={props.name} />
    </div>
  );
}

export default Restaurant;