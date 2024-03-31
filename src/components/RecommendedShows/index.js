import EachRecommendedShow from "../EachRecommendedShow";
import "./index.css";

const RecommendedShows = ({ shows }) => {
  return (
    <div className="recommendedShowsContainer">
      {shows.map((show, index) => (
        <EachRecommendedShow key={index} {...show} />
      ))}
    </div>
  );
};

export default RecommendedShows;
