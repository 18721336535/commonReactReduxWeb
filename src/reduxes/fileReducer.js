// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  filesInfos:[],
  fileHeads:[],
  fileData:[],
//   [
//   { FileName: 'Tesla', Location: 'Model Y', Time: '10:00', Owner: 'Andy', Status: 'Pending',Release:'' }
// ]
}

export const fileReducer = (state = initialState, action) => {
  console.log("--state-"+JSON.stringify(state))
  console.log("--action--"+JSON.stringify(action))
  console.log("--action.data--"+JSON.stringify(action.data))
  switch (action.type) {
    case "FILESINFOS":
      console.log("--action.data--"+JSON.stringify(action.data)) 
      return {...state, filesInfos:action.data}
    case "SAVEFILEHEADS":
        return {...state, fileHeads:action.fileHeads}
    case "SAVEFILEDATA":
          return {...state, fileData:action.fileData}
    case "DOWNLOAD":
      return {...state, fileData:action.data};
    default:
      console.log("--default state--"+JSON.stringify(state))
      return state;
  }
};
