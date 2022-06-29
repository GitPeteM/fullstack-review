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

  componentDidMount() {
    // Need to render something when the page mounts.
    //axios
    axios.get('/repos')
      .then(repos => {
        this.setState({
          repos: repos.data
        })
      })
      .catch(error => {
        this.setState({error});
      })

  }

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
      this.setState({error});
    })
    // .finally(() =>  {
    //   this.top25RepoList();
    // })
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