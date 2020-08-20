import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    MdAddCircleOutline,
    MdRemoveCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';
import { Link } from 'react-router-dom';
import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, EmptyCart } from './styles';

import StripeCheckoutButton from '../../payments/Payment-button.component.jsx';
import shopMore from '../../assets/images/ShopMore.png';

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subTotal: formatPrice(product.price * product.amount),
        }))
    );
    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce((sumTotal, product) => {
                return sumTotal + product.price * product.amount;
            }, 0)
        )
    );

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

    return (
       
        <Container>
        {cart.length>0?
         <>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUCT</th>
                        <th>QTY</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subTotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            CartActions.removeFromCart(
                                                product.id
                                            )
                                        )
                                    }
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                {/* <button type="button">Proceed to Checkout</button> */}
                <StripeCheckoutButton />
                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
            </>
             : 
             <div style={{textAlign:'center'}}>
                 <h1>No item in your cart</h1>
            
             <img src={shopMore} width="300"  style={{padding:'10px'}} alt="shop more now" />
             <Link to="/">
             <EmptyCart>
                 <button type="button">Back to Home</button>
             </EmptyCart>
              </Link>
         </div>}
        </Container>
       
    );
}
