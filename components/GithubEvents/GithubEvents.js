class GithubEvents {
    constructor(username) {
      this.username = username;
    }
  
    async fetchEvents() {
      const response = await fetch(`https://api.github.com/users/${this.username}/events`);
      const events = await response.json();
      return events.slice(0, 5); // get the first five events
    }
  
    async render(container) {
      const events = await this.fetchEvents();
      const ul = document.createElement('ul');
      //ul.classList.add('lg:flex'); //To make the list stack horisontally
      ul.classList.add('text-left');
      // Clear the container before appending the list to avoid stacking multiple times
      container.innerHTML = '';

      container.appendChild(ul);
  
      events.forEach(event => {
        let eventType = '';
        let eventDescription = '';
        let createdAt = new Date(event.created_at).toLocaleString();
    
        switch (event.type) {
          case 'CommitCommentEvent':
            eventType = 'Commented on';
            eventDescription = `commit at repository`;
            break;
          case 'CreateEvent':
            eventType = 'Created';
            eventDescription = event.payload.ref === null ? `${event.payload.ref_type}` : `${event.payload.ref_type} '${event.payload.ref}' at repository`;
            break;
          case 'DeleteEvent':
            eventType = 'Deleted';
            eventDescription = event.payload.ref === null ? `${event.payload.ref_type}` : `${event.payload.ref_type} '${event.payload.ref}' at repository`;
          case 'ForkEvent':
            eventType = 'Forked';
            eventDescription = `repository`;
            break;
          // Todo: GollumEvent
          case 'IssueCommentEvent':
            eventType = 'Commented on';
            eventDescription = `issue '${event.payload.issue.title}' at repository`;
            break;
          case 'IssuesEvent':
            eventType = event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1);
            eventDescription = `issue '${event.payload.issue.title}' at repository`;
            break;
          // Todo: MemberEvent
          case 'PublicEvent':
            eventType = 'Published';
            eventDescription = `repository`;
            break;
          case 'PullRequestEvent':
            eventType = event.payload.action === 'closed' && event.payload.pull_request.merged ? 'Merged' : 'Opened';
            eventDescription = `pull request at repository`;
            break;
          // Todo: PullRequestReviewEvent
          // Todo: PullRequestReviewCommentEvent
          // Todo: PullRequestReviewThreadEvent
          case 'PushEvent':
            eventType = 'Pushed to';
            eventDescription = `repository`;
            break;
          // Todo: ReleaseEvent
          // Todo: SponsorshipEvent
          // Todo: WatchEvent
          default:
            eventType = event.type;
            eventDescription = `at repository`;
            break;
        }
    
        const li = document.createElement('li');
        li.classList.add('text-left');
        li.classList.add('li-events');

        li.innerHTML = `
          <span class="font-bold">${eventType} ${eventDescription} 
          <a href="https://www.github.com/${event.repo.name}" target="_blank" rel="noopener noreferrer">${event.repo.name}</a></span> 
          <br /> 
          <span class="text-xs text-gray-500">${createdAt}</span>
`;

        ul.appendChild(li);
      });
    }
  }
  export default GithubEvents;