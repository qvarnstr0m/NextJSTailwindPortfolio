import { useEffect, useState } from 'react';
import moment from 'moment';

async function fetchCommits() {
    const response = await fetch(`https://api.github.com/users/qvarnstr0m/events`);
    const data = await response.json();
    const commits = data
      .filter(event => event.type === 'PushEvent')
      .map(event => ({
        message: event.payload.commits[0].message,
        date: moment(event.created_at).format('YYYY-MM-DD'),
        repo: event.repo.name
      }))
      .slice(0, 5);
    return commits;
  }
  