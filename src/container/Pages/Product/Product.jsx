import React from 'react';
import './Product.css';
import CardProduct from '../Product/CardProduct/CardProduct';
import { Fragment } from 'react';
import {connect} from 'react-redux';

class Product extends React.Component {
    // state = {
    //     order: 4
    // }

    // productHandleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png" alt="logo-product"/>
                    </div>
                    <div className="troley">
                        <img src="" alt="logo-troley"/>
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct></CardProduct>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);