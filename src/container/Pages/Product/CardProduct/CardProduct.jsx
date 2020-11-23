import React from 'react';
import Counter from './Counter';

class CardProduct extends React.Component {
    render() {
        console.log(this);
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/dcolonel/Geprek+Ekspress+Matah+(1).jpg" alt="thumb-prod"/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu</p>
                <p className="product-price">Rp. 410.000</p>
                <Counter cardOnCounter={(value) => this.props.productOnCounter(value)}></Counter>
            </div>
        );
    }
}

export default CardProduct;