import { FaLocationDot } from "react-icons/fa6";
import ShowBackgroundContainer from "./styledComponents";
import "./index.css";

const EachRecommendedShow = ({
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
    <ShowBackgroundContainer imgUrl={imgUrl} className="eachRecommendedShow">
      {/*Image url is not working because The URL provided is a link to a webpage containing the image, not the direct URL of the image itself*/}
      <div className="showDetailsContainer">
        <div className="showNameAndLocationContainer">
          <h1 className="showHeading">{eventName}</h1>
          <div className="showLocationContainer">
            <FaLocationDot />
            <p className="showCity">{cityName}</p>
          </div>
        </div>
        <div className="dateWeatherAndDistanceContainer">
          <p className="date">{formattedDate}</p>
          <p className="weatherAndDistance">
            {weather},| {formattedDistance}
          </p>
        </div>
      </div>
    </ShowBackgroundContainer>
  );
};

export default EachRecommendedShow;
