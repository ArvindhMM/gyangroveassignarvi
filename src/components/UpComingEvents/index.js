import EachUpComingEvent from "../EachUpComingEvent";

import "./index.css";

const UpComingEvents = ({ events }) => {
  return (
    <div className="UpComingEventsContainer">
      {events.map((event, index) => (
        <EachUpComingEvent key={index} {...event} />
      ))}
    </div>
  );
};

export default UpComingEvents;
