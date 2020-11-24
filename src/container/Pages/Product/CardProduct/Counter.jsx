import React from 'react';
import {RootContext} from '../../../Home/Home';
// import {connect} from 'react-redux';
// import ActionType from '../../../../redux/reducer/globalActionType';

class Counter extends React.Component {
    render() {
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <div className="counter">
                                <button className="minus" onClick={() => value.dispatch({type: 'MINUS_ORDER'})}>-</button>
                                <input type="text" value={value.state.totalOrder}/>
                                <button className="plus" onClick={() => value.dispatch({type: 'PLUS_ORDER'})}>+</button>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default Counter;