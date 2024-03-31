import { FaLocationDot } from "react-icons/fa6";
import EventBgContainer from "./styledComponent";
import "./index.css";

const EachUpComingEvent = ({
  eventName,
  cityName,
  date,
  weather,
  distanceKm,
  imgUrl,
}) => {
  const dateObj = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  const distance = parseFloat(distanceKm);
  const formattedDistance = `${(distance / 1000).toFixed(0)}km`;

  return (
    <div className="eachUpComingEventContainer">
      <EventBgContainer
        imgUrl={imgUrl}
        className="UpcomingEvent_imageContainer"
      >
        <p className="upcomingEventDate">{formattedDate}</p>
      </EventBgContainer>
      <div className="eventsDetails">
        <div className="UpcomingEvent_showNameAndLocationContainer">
          <h1 className="UpcomingEvent_showHeading">{eventName}</h1>
          <div className="UpcomingEvent_showLocationContainer">
            <FaLocationDot />
            <p className="UpcomingEvent_showCity">{cityName}</p>
          </div>
        </div>
        <p className="UpcomingEvent_weatherAndDistance">
          {weather},| {formattedDistance}
        </p>
      </div>
    </div>
  );
};

export default EachUpComingEvent;
