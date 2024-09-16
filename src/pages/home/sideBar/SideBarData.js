// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {MdOutlineBugReport} from "react-icons/md";

export const SidebarData = [
    {
        title: "Batch Upload",
        path: "/ui/home/upload",
        icon: <FaIcons.FaCloudUploadAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Excel",
                path: "/ui/home/upload/excel",
                icon: <FaIcons.FaFileExcel />,
            },
            {
                title: "CSV",
                path: "/ui/home/upload/csv",
                icon: <FaIcons.FaFileCsv />,
            },
            {
                title: "Others",
                path: "/ui/home/upload/others",
                icon: <FaIcons.FaEnvelopeOpenText />,
            }
            
        ],
    },
    {
        title: "Audit",
        path: "/ui/home/audit",
        icon: <AiIcons.AiOutlineAudit />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Before R",
                path: "/ui/home/audit/before",
                icon: <IoIcons.IoIosPaper/>,
                cName: "sub-nav",
            },
            {
                title: "After R",
                path: "/ui/home/audit/after",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Result",
                path: "/ui/home/audit/result",
                icon: <IoIcons.IoIosGitCompare/>,
            },
        ],
    },
    {
        title: "Adjust",
        path: "/ui/home/adjust",
        icon: <FaIcons.FaAdjust/>,
    },
    
    {
        title: "Report",
        path: "/ui/home/report",
        icon: <MdOutlineBugReport />,
    },
    {
        title: "Dashboard",
        path: "/ui/home/dashboard",
        icon: <IoIcons.IoMdHelpCircle/>,

        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav: [
            {
                title: "Line",
                path: "/ui/home/dashboard/Line",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: "Pie",
                path: "/ui/home/dashboard/pie",
                icon: <IoIcons.IoIosPaper/>,
            },
        ],
    }
];
