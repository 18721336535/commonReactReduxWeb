import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, {useMemo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const onSearch = (value, _e, info) => console.log(info?.source, value);



const CustomButtonComponent = (props) => {
    const handleClick = () => {
        // 这里替换成你想要打开的新页面的URL
        const url = 'https://www.example.com';
        window.open(url, '_blank');
      };
    const [status, setStatus] = useState("upload")
    return <button onClick={handleClick}>查看/控制</button>;
};

const MyPlants = () => {
    const filesInfos = useSelector((state) => state.filesInfos);
    console.log("--UploadHome filesInfos---"+JSON.stringify(filesInfos))
    const [data, setData] = useState([
        { 编号: 'SHP001', 作物名称: 'Melon', 作物棚号: '001', 所在地址: '西戈村A组', 当前温度: '26C',当前湿度:'xp',当前光照:'yp',更新时间:"2024-08-30 12:00" },
        { 编号: 'SHP002', 作物名称: 'Melon', 作物棚号: '002', 所在地址: '西戈村A组', 当前温度: '26C',当前湿度:'xp',当前光照:'yp',更新时间:"2024-08-30 12:00" },
        { 编号: 'SHP003', 作物名称: 'Melon', 作物棚号: '003', 所在地址: '西戈村A组', 当前温度: '26C',当前湿度:'xp',当前光照:'yp',更新时间:"2024-08-30 12:00" },
        { 编号: 'SHP004', 作物名称: 'Melon', 作物棚号: '004', 所在地址: '西戈村A组', 当前温度: '26C',当前湿度:'xp',当前光照:'yp',更新时间:"2024-08-30 12:00" },
        { 编号: 'SHP005', 作物名称: 'Melon', 作物棚号: '005', 所在地址: '西戈村A组', 当前温度: '26C',当前湿度:'xp',当前光照:'yp',更新时间:"2024-08-30 12:00" },
    ]);
    const [columnDefs, setColumnDefs] = useState([
        {
            field: '编号',
            checkboxSelection: true,
            editable: true,
            cellEditor: 'agSelectCellEditor',
            width: '200',
        },
        { field: '作物名称', width: '100', },
        { field: '作物棚号', width: '100', },
        { field: '所在地址'},
        { field: '当前温度', width: '100', },
        { field: '当前湿度' , width: '100',},
        { field: '当前光照' , width: '100',},
        { field: '更新时间' , width: '200',},
        { field: '操作', width: '100', cellRenderer: CustomButtonComponent}
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
            <br></br><br></br>
            <Search style={{width:256}} placeholder="input search text" onSearch={onSearch} enterButton />
            <AgGridReact  style={{width:1200}}
                rowData={data}
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

export default MyPlants