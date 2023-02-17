import { useEffect, useRef } from 'react';
import GithubEvents from "../GithubEvents/GithubEvents"

function GithubEventsComponent({ username }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const githubEvents = new GithubEvents(username);
    githubEvents.render(containerRef.current);
  }, [username]);

  return <div ref={containerRef}></div>;
}

export default GithubEventsComponent;