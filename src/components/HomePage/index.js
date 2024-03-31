import { Component } from "react";
import { FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import UpComingEvents from "../UpComingEvents";
import { IoMdPerson } from "react-icons/io";

import RecommendedShows from "../RecommendedShows";

import "./index.css";

class HomePage extends Component {
  state = {
    recommendedShows: [],
    upcomingEventsPageNo: 1,
    upcomingEvents: [],
    loading: false,
  };

  componentDidMount() {
    this.getRecommendedShows();
    this.getUpComingEvents();
    window.addEventListener("scroll", this.handleScroll, {
      passive: false,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  getRecommendedShows = async () => {
    try {
      const response = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      );
      const data = await response.json();
      this.setState({ recommendedShows: data.events });
    } catch (error) {
      console.error("Error Fetching Recommended Shows:", error);
    }
  };

  getUpComingEvents = async () => {
    const { upcomingEventsPageNo } = this.state;
    console.log("page", upcomingEventsPageNo);
    this.setState({ loading: true });
    try {
      const response = await fetch(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${upcomingEventsPageNo}&type=upcoming`
      );
      const data = await response.json();
      const uniqueUpcomingEvents = data.events.filter((event) => {
        return !this.state.upcomingEvents.some(
          (existingEvent) => existingEvent.eventName === event.eventName
        );
      });
      this.setState((prevState) => ({
        upcomingEvents: [...prevState.upcomingEvents, ...uniqueUpcomingEvents],
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching events:", error);
      this.setState({ loading: false });
    }
  };

  handleScroll = () => {
    const { loading, upcomingEventsPageNo } = this.state;

    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      this.setState(
        (prevState) => ({
          upcomingEventsPageNo: prevState.upcomingEventsPageNo + 1,
        }),
        () => {
          this.getUpComingEvents();
        }
      );
    }
  };

  render() {
    const { recommendedShows, upcomingEvents } = this.state;
    console.log("recommendedShows", recommendedShows);
    console.log("upcomingEvents", upcomingEvents);
    return (
      <div className="bgContainer">
        <div className="menuSectionMobile">
          <div className="mobileLine1">
            <div className="bookUsAndLocationContainer">
              <h1 className="bookUs">BookUsNow</h1>
              <div className="locationContainer">
                <FaLocationDot />
                <p>Mumbai, India </p>
                <FaAngleRight />
              </div>
            </div>
            <div className="icons">
              <IoSearch className="icon" />
              <FaHeart className="icon" />
              <IoMdPerson className="icon" />
            </div>
          </div>
          <div className="mobileMenuLine2">
            <ul className="menuList">
              <li className="listItem">Live shows</li>
              <li className="listItem">Streams</li>
              <li className="listItem">Movies</li>
              <li className="listItem">Plays</li>
              <li className="listItem">Events</li>
              <li className="listItem">Sports</li>
              <li className="listItem">Activities</li>
            </ul>
          </div>
        </div>
        <div className="menuSection">
          <div className="bookUsAndLocationContainer">
            <h1 className="bookUs">BookUsNow</h1>
            <div className="locationContainer">
              <FaLocationDot />
              <p>Mumbai, India </p>
              <FaAngleRight />
            </div>
          </div>
          <div className="categoriesSearchAndMenuContainer">
            <div className="categoriesAndSearchContainer">
              <button type="button" className="categoriesButton">
                <GiHamburgerMenu className="categoriesIcon" />
                Categories
              </button>
              <div className="searchInputContainer">
                <input
                  type="search"
                  id="search"
                  name="search"
                  className="searchInput"
                />
                <IoSearch />
              </div>
            </div>
            <div className="menuItemContainer">
              <ul className="menuList">
                <li className="listItem">Live shows</li>
                <li className="listItem">Streams</li>
                <li className="listItem">Movies</li>
                <li className="listItem">Plays</li>
                <li className="listItem">Events</li>
                <li className="listItem">Sports</li>
                <li className="listItem">Activities</li>
              </ul>
            </div>
          </div>
          <div className="favoritesAndSignInContainer">
            <button type="button" className="favorites">
              <FaHeart className="heartIcon" />
              Favorites
            </button>
            <button type="button" className="signInButton">
              Sign In
            </button>
          </div>
        </div>
        <div className="bannerSectionBgContainer">
          <h1 className="heading">
            Discover Exciting Events Happening
            <br />
            Near You-Stay Tuned for Updates!
          </h1>
          <p className="description">
            Dorem ipsum dolor sit amet, consectetur adipising elit. Nunc
            vulputate libertate libero et velit interdum,
            <br /> ac aliquet odio matis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per
          </p>
          <div className="recommended_shows">
            <p className="recommendedShowHeading">
              RecommendedShows <FaArrowRightLong />
            </p>
            <RecommendedShows
              shows={recommendedShows}
              id="recommendedShowsContainer"
            />
          </div>
        </div>
        <div className="upcomingEvent">
          <p className="recommendedShowHeading">
            Upcoming events <FaArrowRightLong />
          </p>
          <UpComingEvents events={upcomingEvents} />
        </div>
      </div>
    );
  }
}

export default HomePage;
