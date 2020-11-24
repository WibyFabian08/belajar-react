import React from 'react';
import './Product.css';
import CardProduct from '../Product/CardProduct/CardProduct';
import { Fragment } from 'react';
import {RootContext} from '../../Home/Home';

class Product extends React.Component {
    render() {
        return(
            <RootContext.Consumer>
                {
                    value => {
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
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CardProduct></CardProduct>
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}

export default Product;