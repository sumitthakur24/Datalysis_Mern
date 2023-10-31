import React from "react";
import Sidebar from "../Components/sidebar";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import Barchart from "../Charts/BarCharts";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const Analytics = () => {
  return (
    <>
      <Navbar />
      <Box height={90} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Card sx={{ height: 70 + "vh" }}>
            <CardContent>
              <Barchart />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Analytics;
