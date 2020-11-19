import React from 'react';

class CardProduct extends React.Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        // props dari halaman product
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        if(this.state.order < 10) {
            this.setState({
                order: this.state.order + 1
            }, () => {
                this.handleCounterChange(this.state.order);
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
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/dcolonel/Geprek+Ekspress+Matah+(1).jpg" alt="thumb-prod"/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu</p>
                <p className="product-price">Rp. 410.000</p>
                 <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;