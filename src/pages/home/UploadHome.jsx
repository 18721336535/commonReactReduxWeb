import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, {useMemo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UploadFiles from "../../components/uploadFiles";


ModuleRegistry.registerModules([ClientSideRowModelModule]);


const releaseFunc = (() => {
    
});

const CustomButtonComponent = (props) => {
    const [status, setStatus] = useState("upload")
    return <button onClick={() => {
        setStatus('in progress'); 
        releaseFunc()}}>
            {status}
        </button>;
};

const UploadHome = () => {
    const filesInfos = useSelector((state) => state.filesInfos);
    console.log("--UploadHome filesInfos---"+JSON.stringify(filesInfos))
    const [columnDefs, setColumnDefs] = useState([
        {
            field: 'FileName',
            checkboxSelection: true,
            editable: true,
            cellEditor: 'agSelectCellEditor',
        },
        { field: 'Size' },
        { field: 'Time' },
        { field: 'Owner'},
        { field: 'Status' },
        { field: 'Button', cellRenderer: CustomButtonComponent}
    ]);

    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',
            floatingFilter: true,
        };
    }, []);

    return (
        <div
            className={
                "ag-theme-quartz"
            }
            style={{ height: 500 }}
        >
            <UploadFiles></UploadFiles>
            <br></br><br></br>
            {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
            <AgGridReact
                rowData={filesInfos}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowSelection="multiple"
                suppressRowClickSelection={true}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 25, 50]}
            />
        </div>
    );
};

export default UploadHome