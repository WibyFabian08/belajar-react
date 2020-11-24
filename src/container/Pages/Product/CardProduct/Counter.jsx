import React from 'react';
import {GlobalConsumer} from '../../../../context/context';
// import {connect} from 'react-redux';
// import ActionType from '../../../../redux/reducer/globalActionType';

class Counter extends React.Component {
    render() {
        return(
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                <input type="text" value={this.props.state.totalOrder}/>
                <button className="plus" onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
            </div>
        )
    }
}

export default GlobalConsumer(Counter);