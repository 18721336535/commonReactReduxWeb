// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const upload = (data) => {
  return {
    type: "UPLOAD",
    data: data
  };
};

const download = () => {
  return {
    type: "DOWNLOAD",
  };
};

export { upload, download };
