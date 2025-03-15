import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

const Dashboard = () => {
    const navigate = useNavigate();

    const projects = [
        { name: "AHA", published: 15, draft: 1 },
        { name: "AMD", published: 20, draft: 5 },
        { name: "CANELA", published: 25, draft: 0 },
        { name: "PLIVE", published: 30, draft: 8 },
        { name: "Cignal", published: 35, draft: 0 },
        { name: "UNIVISION", published: 40, draft: 0 },
        { name: "GAME", published: 45, draft: 4 },
        { name: "NEWS 9", published: 50, draft: 10 },
        { name: "NEWS 9", published: 50, draft: 10 },
        { name: "NEWS 9", published: 50, draft: 10 },
        { name: "NEWS 9", published: 50, draft: 10 },
        { name: "NEWS 9", published: 50, draft: 10 },
    ];

    return (
    <Box
      sx={{
        display: "flex",
        padding: 3,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#212121",
        minHeight: "calc(100vh - 90px)",
        px: 3,
      }}
    >      
      <TableContainer
        component={Paper}
        style={{
          // maxWidth: 800,
          width: "100%",
          // padding: 16,
          backgroundColor: "#333",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Table
          sx={{
            borderCollapse: "separate",
            borderSpacing: "0",
          }}
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "#424242" }}>
              <TableCell style={{ color: "#e6e7e7", borderBottom: "none" }}><strong>Project Name</strong></TableCell>
              <TableCell align="center" style={{ color: "#e6e7e7", borderBottom: "none" }}><strong>Published</strong></TableCell>
              <TableCell align="center" style={{ color: "#e6e7e7", borderBottom: "none" }}><strong>Draft</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow
                key={index}
                hover
                sx={{
                  cursor: "pointer",
                  backgroundColor: index % 2 === 0 ? "#2c2c2c" : "#383838",
                  transition: "background-color 0.3s",
                }}
                onClick={() => navigate(`/project-details/${project.name}`)}
              >
                <TableCell style={{ color: "#e6e7e7", borderBottom: "none" }}>{project.name}</TableCell>
                <TableCell align="center" style={{ color: "#81c784", borderBottom: "none" }}>{project.published}</TableCell>
                <TableCell align="center" style={{ color: "#f52d31", borderBottom: "none" }}>{project.draft}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
