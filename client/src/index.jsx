import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      repos: []
    }

  }

  // componentDidMount() {
  //   //axios
  //   //localhost to your own server, with port/repos
  //   // axios getting start

  //   fetch(`https://api.github.com/users/"${term}/repos`)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           repos: result
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           error
  //         });
  //       }
  //     )
  // }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    // make a post request with axios.
    axios.post('https://localhost:1128/repos', {
      term
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render () {
    const { error, repos} = this.state;
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));