import { useState, useEffect, useRef } from "react";
import GithubEvents from "../GithubEvents/GithubEvents";

function GithubEventsComponent({ username }) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const githubEvents = new GithubEvents(username);
        const events = await githubEvents.fetchEvents();
        githubEvents.render(containerRef.current, events);
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
  console.log(containerRef);
  return <div ref={containerRef}></div>;
}

export default GithubEventsComponent;
