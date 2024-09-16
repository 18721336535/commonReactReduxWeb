// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const saveFileInfos = (data) => {
  return {
    type: "FILESINFOS",
    data: data
  };
};

const saveFileData = () => {
  return {
    type: "DOWNLOAD",
  };
};

export { saveFileInfos, saveFileData };
