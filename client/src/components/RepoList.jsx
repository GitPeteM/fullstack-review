import React from 'react';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <ul>
      {/* {props.repos.[0].user_name} */}
      {repos.map(repo => (
        <li key={repo.id}>
          {repo.url}
        </li>
      ))}
    </ul>
  </div>
)

export default RepoList;