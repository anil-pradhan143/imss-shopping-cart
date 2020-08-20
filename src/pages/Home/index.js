import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
    //  const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );
    const products = useSelector(state => {
        if (state) {
            return state.apidata[0]
        }
    })
    // replacing componentDidMount
    useEffect(() => {

        // creating another function to be able to use async directive
        //   function loadProducts() {
        // const response = await api.get('products');
        dispatch(CartActions.requestApiData());
        // and instead of setState, we use setProducts now
        // setProducts(data);
        //}

        // loadProducts();
    }, []);

    function handleAddProduct(id) {
        // here using the bindActionCreators we can use the action directly from the props
        dispatch(CartActions.addToCartRequest(id));

        // after adding a product to cart, redux saga navigates to the /cart page. This happens
        // at the generator addToCart

        // const { dispatch } = this.props;
        // dispatch(CartActions.addToCart(product));
    }

    return (
        <ProductList>
            {products ? products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
            <span>{formatPrice(product.price)}</span>

                    <button type="button" onClick={() => handleAddProduct(product.id)}  >
                        <div>
                            <FaCartPlus size={16} color="#FFF" />{' '}
                            {amount[product.id] || 0}
                            <span>Add to Cart</span>
                        </div>
                    </button>
                </li>
            ))
                : null}
        </ProductList>
    );
}
