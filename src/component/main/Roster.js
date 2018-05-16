import React, { Component } from 'react';

class Roster extends Component {
	// constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }

	componentDidMount () {
	}
	
  render() {
    return (
      <div className="roster">
				路由传参
        Roster{this.props.match.params.id}
      </div>
    );
  }
}

export default Roster;