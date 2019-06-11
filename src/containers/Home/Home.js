import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import { connect } from 'react-redux';
class Home extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="thx-wrapper flex">
          <Profile/>

          <div className="thx-window">
            <div className="sub-title flex">
              <h1 id="eqTitle" className="eq-title">{this.props.profileList[this.props.checkedItem].name.charAt(0).toUpperCase()+ this.props.profileList[this.props.checkedItem].name.slice(1)}</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return { 
      checkedItem: state.checkedItem,
      profileList: state.profileList
  }
}
export default connect(mapStateToProps)(Home);