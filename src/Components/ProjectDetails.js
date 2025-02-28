import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, MenuItem, 
  FormControl, Select, InputLabel, Box, TablePagination 
} from "@mui/material";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ProjectDetails = () => {
  const { name } = useParams(); // Get project name from URL
  const [status, setStatus] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const data = [
    { id: 1, name: "ABC", lastModifiedDate: "2024-02-10T10:00:00", createdDate: "2024-02-10T10:00:00", draftReason: "lorem ipsum" },
    { id: 2, name: "DEF", lastModifiedDate: "2024-02-11T10:00:00", createdDate: "2024-02-11T12:00:00", draftReason: "lorem ipsum" },
    { id: 3, name: "GHI", lastModifiedDate: "2024-02-12T10:00:00", createdDate: "2024-02-12T14:00:00", draftReason: "lorem ipsum" },
    { id: 4, name: "JKL", lastModifiedDate: "2024-02-13T10:00:00", createdDate: "2024-02-13T16:00:00", draftReason: "lorem ipsum" },
    { id: 5, name: "MNO", lastModifiedDate: "2024-02-14T10:00:00", createdDate: "2024-02-14T18:00:00", draftReason: "lorem ipsum" },
    { id: 6, name: "PQR", lastModifiedDate: "2024-02-15T10:00:00", createdDate: "2024-02-15T20:00:00", draftReason: "lorem ipsum" },
  ];

  // Handle pagination change
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ padding: 3 }}>
        {/* Filters & Project Name */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}>
            Project: {name}
          </Typography>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel>Status</InputLabel>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="published">Published</MenuItem>
              <MenuItem value="draft">Draft</MenuItem>
            </Select>
          </FormControl>

          <MobileDateTimePicker
            label="Start Date & Time"
            value={startDate}
            onChange={(date) => setStartDate(date)}
            slotProps={{ textField: { size: "small", variant: "outlined" } }}
          />

          <MobileDateTimePicker
            label="End Date & Time"
            value={endDate}
            onChange={(date) => setEndDate(date)}
            slotProps={{ textField: { size: "small", variant: "outlined" } }}
          />
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#eeeeee" }}>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Created Date</strong></TableCell>
                <TableCell><strong>Last Modified Date</strong></TableCell>
                <TableCell><strong>Draft Reason</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{dayjs(item.createdDate).format("YYYY-MM-DD HH:mm")}</TableCell>
                  <TableCell>{dayjs(item.lastModifiedDate).format("YYYY-MM-DD HH:mm")}</TableCell>
                  <TableCell>{item.draftReason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default ProjectDetails;
