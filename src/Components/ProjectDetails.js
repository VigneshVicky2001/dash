import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, MenuItem, 
  FormControl, Select, InputLabel, Box, TablePagination 
} from "@mui/material";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomPagination from "./Common/CustomPagination";
import dayjs from "dayjs";

const ProjectDetails = () => {
  const { name } = useParams();
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

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          padding: 3,
          // backgroundColor: "#212121",
          minHeight: "calc(100vh - 90px)",
          paddingBottom: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2, flexWrap: "wrap" }}>
          <Typography variant="h6" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#fff" }}>
            Project: {name}
          </Typography>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel sx={{ color: "#fff" }}>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                ".MuiSvgIcon-root": { color: "#fff" },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="published">Published</MenuItem>
              <MenuItem value="draft">Draft</MenuItem>
            </Select>
          </FormControl>

          <MobileDateTimePicker
            label="Start Date & Time"
            value={startDate}
            onChange={(date) => setStartDate(date)}
            slotProps={{
              textField: {
                size: "small",
                variant: "outlined",
                sx: {
                  backgroundColor: "#333",
                  input: { color: "#fff" },
                  label: { color: "#fff" },
                },
              },
            }}
          />

          <MobileDateTimePicker
            label="End Date & Time"
            value={endDate}
            onChange={(date) => setEndDate(date)}
            slotProps={{
              textField: {
                size: "small",
                variant: "outlined",
                sx: {
                  backgroundColor: "#333",
                  input: { color: "#fff" },
                  label: { color: "#fff" },
                },
              },
            }}
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{
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
              <TableRow sx={{ backgroundColor: "#424242" }}>
                <TableCell sx={{ color: "#e6e7e7", borderBottom: "none" }}><strong>Title</strong></TableCell>
                <TableCell sx={{ color: "#e6e7e7", borderBottom: "none" }}><strong>ID</strong></TableCell>
                <TableCell sx={{ color: "#e6e7e7", borderBottom: "none" }}><strong>Created Date</strong></TableCell>
                <TableCell sx={{ color: "#e6e7e7", borderBottom: "none" }}><strong>Last Modified Date</strong></TableCell>
                <TableCell sx={{ color: "#e6e7e7", borderBottom: "none" }}><strong>Draft Reason</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                <TableRow
                  key={item.id}
                  hover
                  sx={{
                    cursor: "pointer",
                    backgroundColor: index % 2 === 0 ? "#2c2c2c" : "#383838",
                    transition: "background-color 0.3s",
                    // borderBottom: "0px",
                    "&:last-child td": { borderBottom: 0 },
                  }}
                >
                  <TableCell sx={{ color: "#e6e7e7", border: "none" }}>{item.name}</TableCell>
                  <TableCell sx={{ color: "#e6e7e7", border: "none" }}>{item.id}</TableCell>
                  <TableCell sx={{ color: "#e6e7e7", border: "none" }}>
                    {dayjs(item.createdDate).format("YYYY-MM-DD HH:mm")}
                  </TableCell>
                  <TableCell sx={{ color: "#e6e7e7", border: "none" }}>
                    {dayjs(item.lastModifiedDate).format("YYYY-MM-DD HH:mm")}
                  </TableCell>
                  <TableCell sx={{ color: "#e6e7e7", border: "none" }}>{item.draftReason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          sx={{
            color: "#fff",
            backgroundColor: "#333",
            ".MuiTablePagination-toolbar": {
              padding: "0 8px",
              minHeight: "36px",
            },
            ".MuiTablePagination-selectLabel, .MuiTablePagination-input, .MuiTablePagination-displayedRows": {
              color: "#fff",
            },
            ".MuiTablePagination-select, .MuiTablePagination-actions": {
              margin: 0,
            },
            ".MuiSvgIcon-root": {
              color: "#fff",
            },
            ".MuiTablePagination-select": {
              backgroundColor: "#424242",
              borderRadius: "4px",
              // padding: "2px 8px",
            },
            ".MuiTablePagination-actions button": {
              padding: "4px",
            },
          }}
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
