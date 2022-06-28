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
    this.top25RepoList = this.top25RepoList.bind(this);

  }

  // componentDidMount() {
    //Use this for the get.
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
    axios.post('/repos', {
      term
    })
    .then((statusCodeResponse) => {
      // initiate get method here. call function
      this.top25RepoList();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  top25RepoList () {
    axios.get('/repos')
    .then(repos => {
      // console.log(repos.data)
      this.setState({
        repos: repos.data
      })
      console.log(this.state)
    })
    .catch(error => {
      this.setState({error});
    })
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