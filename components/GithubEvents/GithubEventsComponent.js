import { useState, useEffect, useRef } from "react";
import GithubEvents from "../GithubEvents/GithubEvents";

function GithubEventsComponent({ username }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const githubEvents = new GithubEvents(username);
        const events = await githubEvents.fetchEvents();
        setEventsData(githubEvents.render(events));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [username]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  return <div>{eventsData}</div>;
}

export default GithubEventsComponent;
