// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = [
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' }
]

export const cartReducer = (state = initialState, action) => {
  console.log("--state-"+JSON.stringify(state))
  console.log("--action--"+JSON.stringify(action))
  console.log("--action.data--"+JSON.stringify(action.data))
  switch (action.type) {
    case "UPLOAD":
      console.log("--action.data--"+JSON.stringify(action.data)) 
      return  action.data;

    case "DOWNLOAD":
      return action.data;
    default:
      console.log("--default state--"+JSON.stringify(state))
      return state;
  }
};
