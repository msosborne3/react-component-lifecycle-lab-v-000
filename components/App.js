const React = require('react');
const TweetWall = require('./TweetWall');

const { getTweets } = require('../lib/mockAPI');
const { initialize, update } = require('../lib/chart');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      latestTweets: []
    };
    initialize();
    this.updateChart = this.updateChart.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  // componentWillMount() 
  componentWillMount() {
    this.fetchTweets();
  }

  // componentDidMount() 
  componentDidMount() {
    this.startInterval();
  }

  // componentWillUnmount()
  componentWillUnmount() {
    this.cleanUpInterval();
  }

  // componentDidUpdate()
  componentDidUpdate() {
    this.updateChart(this.state.latestTweets.length);
  }
  
  updateChart(numTweets) {
    update(numTweets);
  }

  startInterval() {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  fetchTweets() {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div><TweetWall newTweets={this.state.latestTweets} /></div>
    )
  }
}

module.exports = App;
