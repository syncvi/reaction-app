import React, { Component } from 'react';
import './followButton'

class FollowButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			follow: false
		};
	} 

  follow(){ 
	this.setState((prevState) => {
             let prev = prevState.counter;
             if(prev){
                prev = false
             }
             else{
                prev = true
             }
             return {follow: prev};
        })
} 
render(){  
      return( 
            <div><input class="btn" type="button" value="Follow" onClick={() => this.follow()}/>                                                                                           
            </div> ); 
}
}
export default FollowButton;