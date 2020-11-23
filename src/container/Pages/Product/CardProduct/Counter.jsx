import React from 'react';

class Counter extends React.Component {
    state = {
        order: 4
    }

    handlePlus = () => {
        if(this.state.order < 10) {
            this.setState({
                order: this.state.order + 1
            }, () => {
                this.btnHandleCounterChange(this.state.order);
            })
        } else {
            alert('tidak boleh lebih dari 10 pesanan');
        }
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.btnHandleCounterChange(this.state.order);
            })
        }
    }

    // fungsi untuk mengirim perubahan state dari halaman counter ke halaman product
    btnHandleCounterChange = (newValue) => {
        // props dari halaman product
        this.props.cardOnCounter(newValue);
    }

    render() {
        return(
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default Counter;