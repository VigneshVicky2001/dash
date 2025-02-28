import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "50px", backgroundColor: "#f5f5f5" }}>
      <TableContainer component={Paper} style={{ maxWidth: 800, width: "100%", padding: 16 }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#eeeeee" }}>
              <TableCell><strong>Project Name</strong></TableCell>
              <TableCell align="center"><strong>Published</strong></TableCell>
              <TableCell align="center"><strong>Draft</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow 
                key={index} 
                hover
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/project-details/${project.name}`)}
              >
                <TableCell>{project.name}</TableCell>
                <TableCell align="center" style={{ color: "green" }}>
                  {project.published}
                </TableCell>
                <TableCell align="center" style={{ color: "red" }}>
                  {project.draft}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
