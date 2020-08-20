import { combineReducers } from 'redux';

import {apidata,cart} from './cart/reducer';

export default combineReducers({
    cart,apidata
});
