import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
    // state = {
    //     order: 4
    // }

    // handlePlus = () => {
    //     if(this.state.order < 10) {
    //         this.setState({
    //             order: this.state.order + 1
    //         }, () => {
    //             this.btnHandleCounterChange(this.state.order);
    //         })
    //     } else {
    //         alert('tidak boleh lebih dari 10 pesanan');
    //     }
    // }

    // handleMinus = () => {
    //     if(this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.btnHandleCounterChange(this.state.order);
    //         })
    //     }
    // }

    // // fungsi untuk mengirim perubahan state dari halaman counter ke halaman product
    // btnHandleCounterChange = (newValue) => {
    //     // props dari halaman product
    //     this.props.cardOnCounter(newValue);
    // }

    render() {
        return(
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input type="text" value={this.props.order}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: 'ADD_ORDER'}),
        handleMinus: () => dispatch({type: 'MINUS_ORDER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);