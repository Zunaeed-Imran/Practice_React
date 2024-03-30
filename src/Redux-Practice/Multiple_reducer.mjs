import { combineReducers, createStore } from "redux";


const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

const GET_CARD_ITEMS = "GET_CARD_ITEMS";
const ADD_CARD_ITEM = "ADD_CARD_ITEM";

const inititalProductState = {
  products: ['sugar'],
  numberOfProduct: 1,
};

const initialCardState = {
  cards: ['salt'],
  numberOfCards:1,
}

// action

const getProduct = () => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}


const getCards = () => {
  return {
    type: GET_CARD_ITEMS
  };
};

const addCard = (product) => {
  return {
    type: ADD_CARD_ITEM,
    payload: product,
  };
};

//  Reducer

const productReducer = (state = inititalProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    
    case ADD_PRODUCT:
      return {
        product: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      }
      
  
    default:
      return state;
  }
}

const cardReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case GET_CARD_ITEMS:
      return {
        ...state,
      }
    case ADD_CARD_ITEM:
      return {
        cards: [...state.cards, action.payload],
        numberOfCards: state.numberOfCards + 1,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  productR: productReducer,
  cardR: cardReducer,
});


const store = createStore(rootReducer);


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("pata"));

store.dispatch(getCards());
store.dispatch(addCard("bata"));


