import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  onClick: (size) => dispatch({ type: "INCREMENT", size }),
});

/*
import React, { Component } from "react";
import store from '../store';
export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber>
    }
}
*/

export default connect(null, mapDispatchToProps)(AddNumber);
