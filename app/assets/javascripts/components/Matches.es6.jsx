class Matches extends React.Component {
  constructor() {
    super()
    this.state = {
      matches: []
    };
  }
  componentDidMount() {
    // debugger
    // this.setState({
    //   matches: this.props.matches
    // })
  }

  render() {
    // <pre><code>
    //     {JSON.stringify(this.props, null, 4)}
    //   </code></pre>
    return(

      <div>
        <MatchesViewAll matchedPairs={this.props.matchedPairs} matches={this.props.matches} user={this.props.user} userImg={this.props.userImg}/>
      </div>
    )
  }
}
