import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../Components/sidebar";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import { useTable } from "react-table";
import chartData from "../Charts/Chart_Data.json";
import { Columns } from "../Charts/Columns";
import axios from "axios";
import "./data.css";

const Data = () => {
  const [tdata, setTdata] = useState([]);

  const loadData = async () => {
    const data = await axios.get("http://localhost:5000/v1/tabledata");
    setTdata(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => chartData, []);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex", maxHeight: 20 + "px" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, maxHeight: 20 + "px" }}>
          <div className="table-wrapper">
            <table {...getTableProps()} className="fl-table">
              <thead>
                {headerGroups.map((headerGrp) => (
                  <tr {...headerGrp.getHeaderGroupProps()}>
                    {headerGrp.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Data;
