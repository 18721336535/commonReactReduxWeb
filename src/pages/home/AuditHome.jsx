import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, {useMemo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import SelectSingleFile from "../../components/SelectSingleFile";


const AuditHome = () => {  
  const fileHeads = useSelector(state => state.fileHeads);
  const fileData = useSelector(state => state.fileData);
    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',
            floatingFilter: true,
        };
    }, []);

    return (
        <div  className={    "ag-theme-quartz" } style={{ height: 500 }}  >
            <SelectSingleFile></SelectSingleFile>
            <br></br><br></br>
            {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
            <AgGridReact
                rowData={fileData}
                columnDefs={fileHeads}
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

export default AuditHome