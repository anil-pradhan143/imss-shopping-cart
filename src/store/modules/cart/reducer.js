import produce from 'immer'; // https://github.com/immerjs/immer

export  function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action;
                draft.push(product);
            });

        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        
        default:
            {
            return state;
            }
    }
}
export  function apidata(state = [], action) {
    switch (action.type) {
        case 'receiveApiData': 
            return produce(state,draft =>{
            draft.push(action.apidata.data)
            })
        default:
        {
        return state;
        }
}
}

    