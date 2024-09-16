import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useSelector,useDispatch } from "react-redux";
import * as XLSX from 'xlsx'


const SelectSingleFile = () => {
  const dispatch = useDispatch();
  // const [fileData, setFileData] = useState([]);
  // const [fileHeads, setFileHeads] = useState([]);
  const [fileList, setFileList] = useState([]);
  const props = {
    multiple: false,
    onChange: ({file,fileList}) => {
        console.log(JSON.stringify(fileList));
        // var data = []
        const reader = new FileReader();
        reader.onload = (event) => {
           const workbook = XLSX.read(event.target.result,{type: 'binary'});
           const sheetName = workbook.SheetNames[0];
           const sheet = workbook.Sheets[sheetName];
           const sheetData = XLSX.utils.sheet_to_json(sheet);
          //  setFileData(sheetData);

           var keys = Object.keys(sheetData[0]);
           var gridHeads = [];
           keys.forEach(item =>{
            var headDefines = {field: item,flex: 1}
            gridHeads.push(headDefines);
           });
           dispatch({ type: "SAVEFILEHEADS", fileHeads: gridHeads})
           dispatch({ type: "SAVEFILEDATA", fileData: sheetData});
        }

        reader.readAsBinaryString(file);
    },
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
  };
  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      {/* <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button> */}

    </>
  );
};
export default SelectSingleFile;