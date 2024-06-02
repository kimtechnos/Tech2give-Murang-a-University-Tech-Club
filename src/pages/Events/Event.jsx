const Event = ({ image, title, description }) => {
  return (
    <div className="events">
      <div className="events-image-wrapper">
        <img src={image} alt="" className="event-image-img" />
      </div>
      <div className="event-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Event;
