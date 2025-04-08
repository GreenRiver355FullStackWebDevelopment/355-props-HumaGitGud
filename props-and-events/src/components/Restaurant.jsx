function Restaurant(props) {

  return (
    <div className="restaurant">
      <h2>{props.restaurant.name}</h2>
      <p>{props.restaurant.address}</p>
      <p>{props.restaurant.phone}</p>

      <h3>Cuisine:</h3>
      <p>{props.restaurant.cuisine}</p>

      <h3>Rating:</h3>
      <p>{props.restaurant.rating}</p>

      <h3>Hours:</h3>
      <p>{props.restaurant.hours.monday}</p>
      <p>{props.restaurant.hours.tuesday}</p>
      <p>{props.restaurant.hours.wednesday}</p>
      <p>{props.restaurant.hours.thursday}</p>
      <p>{props.restaurant.hours.fruday}</p>
      <p>{props.restaurant.hours.saturday}</p>
      <p>{props.restaurant.hours.sunday}</p>

      <h3>Items:</h3>
      {props.restaurant.menu.map((item, index) => (
        <p key={index}> {item.item} - ${item.price.toFixed(2)}</p>
      ))}

      <img src={props.restaurant.image} alt={props.name} />
    </div>
  );
}

export default Restaurant;