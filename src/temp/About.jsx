import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, {useMemo, useState } from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { saveFileData,saveFileInfos } from "../reduxes/fileAction";

const { Search } = Input;

ModuleRegistry.registerModules([ClientSideRowModelModule]);




const About = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
  
    // const [rowData, setRowData] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
        {
            field: 'make',
            checkboxSelection: true,
            editable: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ['Tesla', 'Ford', 'Toyota', 'Mercedes', 'Fiat', 'Nissan', 'Vauxhall', 'Volvo', 'Jaguar'],
            },
        },
        { field: 'model' },
        { field: 'price', filter: 'agNumberColumnFilter' },
        { field: 'electric' },
        {
            field: 'month',
            comparator: (valueA, valueB) => {
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ];
                const idxA = months.indexOf(valueA);
                const idxB = months.indexOf(valueB);
                return idxA - idxB;
            },
        },
    ]);

    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',
            floatingFilter: true,
        };
    }, []);

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        var data = [
            { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
            { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
            { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
            { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
            { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
            { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
            { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
            { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
            { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
            { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
            { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
            { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
            { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
            { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
            { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
            { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
            { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
            { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
            { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
            { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
            { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
            { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
            { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
            { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
            { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
            { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
            { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
            { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
            { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
            { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
            { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
            { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
            { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
            { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
            { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
            { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
        ];
        dispatch(saveFileData(data));
        console.log("onsearch --"+JSON.stringify({state}));
        // axios.post('http://127.0.0.1:8080/api/v1/vehicles', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log("dtata",response.data);
        //     console.log("strinfy",JSON.stringify(response.data.data));
           
        //     setRowData(response.data.data);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

    return (
        <div
            className={
                "ag-theme-quartz-dark"
            }
            style={{ height: 500 }}
        >

            <Search placeholder="input search text" onSearch={onSearch} enterButton />
            <AgGridReact
                rowData={state}
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

export default About



// [
//     { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
//     { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
//     { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
//     { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
//     { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
//     { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
//     { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
//     { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
//     { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
//     { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
//     { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
//     { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
//     { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
//     { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
//     { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
//     { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
//     { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
//     { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
//     { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
//     { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
//     { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
//     { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
//     { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
//     { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
//     { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
//     { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October' },
//     { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August' },
//     { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February' },
//     { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January' },
//     { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March' },
//     { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July' },
//     { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September' },
//     { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December' },
//     { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April' },
//     { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November' },
//     { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May' },
// ]