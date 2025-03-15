import React, { useState } from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from "recharts";

const TotalVodAssets = () => {
  const projectData = [
    { name: "AHA", totalContents: 16, totalDuration: 120 },
    { name: "AMD", totalContents: 25, totalDuration: 200 },
    { name: "CANELA", totalContents: 30, totalDuration: 180 },
    { name: "PLIVE", totalContents: 38, totalDuration: 240 },
    { name: "Cignal", totalContents: 40, totalDuration: 260 },
    { name: "UNIVISION", totalContents: 50, totalDuration: 300 },
    { name: "GAME", totalContents: 55, totalDuration: 330 },
    { name: "NEWS 9", totalContents: 60, totalDuration: 400 },
    { name: "SMART", totalContents: 100, totalDuration: 350 },
    { name: "MSG", totalContents: 250, totalDuration: 200 },
    { name: "YES", totalContents: 160, totalDuration: 150 },
    { name: "STC", totalContents: 10, totalDuration: 5 },
  ];

  const COLORS = [
    "#4DB6AC", "#FF7043", "#9575CD", "#64B5F6", "#FFCA28",
    "#FF8A65", "#4CAF50", "#E57373",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, midAngle } = props;
    const RADIAN = Math.PI / 180;

    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#fff"
        strokeWidth={2}
        style={{
          transition: "all 0.3s ease-out",
          filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3))",
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#212121",
        minHeight: "80vh",
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ color: "#e0e0e0", marginBottom: "10px" }}>
            Total Contents per Project
          </Typography>
          <ResponsiveContainer width={600} height={600}>
            <PieChart>
              <Pie
                data={projectData}
                dataKey="totalContents"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={240}
                fill="#82ca9d"
                label
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {projectData.map((_, index) => (
                  <Cell key={`cell-content-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ textAlign: "center", marginLeft: "50px" }}>
          <Typography variant="h6" sx={{ color: "#e0e0e0", marginBottom: "10px" }}>
            Total Duration per Project
          </Typography>
          <ResponsiveContainer width={600} height={600}>
            <PieChart>
              <Pie
                data={projectData}
                dataKey="totalDuration"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={240}
                innerRadius={150}
                fill="#8884d8"
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {projectData.map((_, index) => (
                  <Cell key={`cell-duration-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Box sx={{ marginLeft: "20px", color: "#e0e0e0" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>Projects Summary</Typography>
        <List>
  {projectData.map((project, index) => {
    const isActive = activeIndex === index;

    return (
      <ListItem
        key={index}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "color 0.3s ease-in-out",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", minWidth: "150px" }}>
          <Box
            sx={{
              width: isActive ? "20px" : "14px",
              height: isActive ? "20px" : "14px",
              backgroundColor: isActive
                ? COLORS[index % COLORS.length]
                : COLORS[index % COLORS.length] + "99",
              borderRadius: "4px",
              marginRight: "12px",
              transition: "all 0.3s ease-in-out",
              filter: isActive ? "brightness(2)" : "brightness(1)",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: isActive ? "bold" : "600",
              transition: "font-weight 0.3s ease-in-out",
            }}
          >
            {project.name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
          <Typography
            variant="body2"
            sx={{
              color: isActive ? "#ffffff" : "#e0e0e0",
              fontWeight: "500",
              transition: "color 0.3s ease-in-out",
            }}
          >
            Contents: {project.totalContents}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: isActive ? "#ffffff" : "#e0e0e0",
              fontWeight: "500",
              transition: "color 0.3s ease-in-out",
            }}
          >
            Duration: {project.totalDuration}s
          </Typography>
        </Box>
      </ListItem>
    );
  })}
</List>




      </Box>
    </Box>
  );
};

export default TotalVodAssets;
