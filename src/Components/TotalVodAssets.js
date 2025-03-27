import React, { useState } from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from "recharts";
import { motion } from "framer-motion";

const TotalVodAssets = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const renderActiveShape = (props) => {
    if (activeIndex === null) return null;
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
      <motion.g
      initial={{ scale: 1 }}
      animate={{ scale: activeIndex !== null ? 1.1 : 1 }} // ✅ Uses motion animation
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <motion.path
        d={`
          M ${cx + outerRadius * Math.cos((startAngle * Math.PI) / 180)}
            ${cy + outerRadius * Math.sin((startAngle * Math.PI) / 180)}
          A ${outerRadius} ${outerRadius} 0 ${endAngle - startAngle > 180 ? 1 : 0} 1
            ${cx + outerRadius * Math.cos((endAngle * Math.PI) / 180)}
            ${cy + outerRadius * Math.sin((endAngle * Math.PI) / 180)}
          L ${cx + innerRadius * Math.cos((endAngle * Math.PI) / 180)}
            ${cy + innerRadius * Math.sin((endAngle * Math.PI) / 180)}
          A ${innerRadius} ${innerRadius} 0 ${endAngle - startAngle > 180 ? 1 : 0} 0
            ${cx + innerRadius * Math.cos((startAngle * Math.PI) / 180)}
            ${cy + innerRadius * Math.sin((startAngle * Math.PI) / 180)}
          Z
        `}
        fill={fill}
        stroke="#fff"
        strokeWidth={2}
        animate={{
          scale: activeIndex !== null ? 1.1 : 1, // ✅ Expands sector size
          filter: activeIndex !== null
            ? "drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.5))"
            : "none",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.g>
    );
  };

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
                innerRadius={120}
                outerRadius={240}
                fill="#82ca9d"
                label
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(null)}
                isAnimationActive={false}
              >
                {projectData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                onClick={() => setActiveIndex(null)}
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
              <motion.div
                key={index}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: isActive ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                <ListItem
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
                    <motion.div
                      style={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: COLORS[index % COLORS.length] + "99",
                        borderRadius: "4px",
                        marginRight: "12px",
                      }}
                      animate={{
                        width: isActive ? "20px" : "14px",
                        height: isActive ? "20px" : "14px",
                        filter: isActive ? "brightness(2)" : "brightness(1)",
                      }}
                      transition={{ duration: 0.3 }}
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
                    <Typography variant="body2" sx={{ color: "#e0e0e0", fontWeight: "500" }}>
                      Contents: {project.totalContents}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#e0e0e0", fontWeight: "500" }}>
                      Duration: {project.totalDuration}s
                    </Typography>
                  </Box>
                </ListItem>
              </motion.div>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default TotalVodAssets;
