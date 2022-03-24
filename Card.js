export default function Card(props) {
  console.log(data);
  return (
    <div className="card-container">
      <img className="card-img" src={props.imageUrl}></img>
      <img
        className="card-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/585px-Google_Maps_pin.svg.png"
      ></img>
      <h3 className="card-country">{props.location}</h3>
      <a className="card-link" href={props.googleMapsUrl} target="_blank">
        View on Google Maps
      </a>
      <h1 className="card-title">{props.title}</h1>
      <h4 className="card-date">
        {props.startDate} - {props.endDate}
      </h4>
      <p className="card-text">{props.description}</p>
    </div>
  );
}
