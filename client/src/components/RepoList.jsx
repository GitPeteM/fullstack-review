import React from 'react';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    <h3> Top Repos Based On Stargazer Count</h3>
    There are {repos.length} repos.
    <table>
      {/* {props.repos.[0].user_name} */}
      {repos.map(repo => (
        <tr key={repo.id}>
          <th>{repo.user_name}</th>
          <td>
            <a href={repo.url}>
            {repo.url}
            </a>
          </td>
          <td>
            {repo.stargazers_count}
          </td>
        </tr>
      ))}
    </table>
  </div>
)

export default RepoList;