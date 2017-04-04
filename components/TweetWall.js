const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // componentWillMount()
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }

  // shouldComponentUpdate()
  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.length > 0;
  }

  // componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
