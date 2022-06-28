import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {/* <ul>
      {repos.[0].user_name}
      {props.repos.map(repo => (
        <li>
          {repo.url}
        </li>
      ))}
    </ul> */}
  </div>
)

export default RepoList;