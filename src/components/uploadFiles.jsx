import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useDispatch } from "react-redux";
import { saveFileInfos } from "../reduxes/fileAction";


const UploadFiles = () => {
  const dispatch = useDispatch();


  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    console.log("---fileList size="+fileList.size)
    fileList.forEach((file) => {
      formData.append('uploads[]', file.originFileObj);
    });
    setUploading(true);
    console.log("---formData="+JSON.stringify(formData))
    // You can use any AJAX library you like
    fetch('http://127.0.0.1:8080/api/v1/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    multiple: true,
    onChange: ({file,fileList}) => {
        console.log(JSON.stringify(fileList));
        var data = []
        fileList.forEach(item =>{
          var fileItem = { FileName: item.name, Size: item.size, Time: item.lastModifiedDate, Owner: 'Andy', Status: 'Pending'}
          data.push(fileItem)
        })
        setFileList(fileList)
        dispatch(saveFileInfos(data));
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
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  );
};
export default UploadFiles;