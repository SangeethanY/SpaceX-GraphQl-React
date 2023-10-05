import {
  FileDownloadRounded,
  HighlightOffRounded,
  ModeEditOutlineRounded,
  PersonRounded,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { uid } from "react-uid";
import { CustomHeader } from "./CustomHeader";

export const CustomTable = ({
  tableHeaders,
  defaultRowSize,
  tableData,
  actionButton,
  tableTitle,
  showEdit,
  showDelete,
  handleEdit,
  handleDelete,
  handleOpen,
  showBack,
  handleBack,
  backTitle,
  showDownload,
  handleDownload,
  showOpen,
  showIcon,
  handleIcon,
  infinityCount,
  handleChange,
  tableDataTotal,
}) => {
  const [activePage, setActivePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowSize || 10);
  const lastIndex = rowsPerPage * activePage;
  const firstIndex = lastIndex - rowsPerPage;
  return (
    <Box>
      <CustomHeader
        title={tableTitle}
        action={actionButton}
        showBack={showBack}
        handleBack={handleBack}
        backTitle={backTitle}
      />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100, 500, 1000]}
        component="div"
        count={!infinityCount ? tableData?.length : tableDataTotal}
        page={activePage - 1}
        onPageChange={(e, p) => {
          setActivePage(p + 1);

          handleChange && handleChange({ page: p + 1, limt: rowsPerPage });
        }}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(e.target.value);

          handleChange &&
            handleChange({ page: activePage, limt: e.target.value });
        }}
        sx={{ backgroundColor: "white", "& p": { margin: 0 } }}
      />
      <TableContainer sx={{ border: "1px solid #ebebeb", borderRadius: 1 }}>
        <Table sx={{ minWidth: 650 }} aria-label="custom table">
          <TableHead sx={{ background: "#f9f9f9" }}>
            <TableRow>
              {tableHeaders?.map((header, index) => (
                <TableCell
                  key={uid(index)}
                  sx={{ fontWeight: 600 }}
                  align="center">
                  {header.label}
                </TableCell>
              ))}
              {showIcon && (
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  {process.env.NEXT_PUBLIC_ENV_PATIENT_NAME}
                </TableCell>
              )}
              {(showEdit || showDelete || showOpen || showDownload) && (
                <TableCell sx={{ fontWeight: 600 }} align="center">
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.length > 0 ? (
              (!infinityCount
                ? tableData.slice(firstIndex, lastIndex)
                : tableData
              ).map((tableDatum, datumInd) => (
                <TableRow
                  sx={{
                    background: "#fdf4e7",
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { background: "#fdf4e7" },
                  }}
                  key={uid(datumInd)}>
                  {tableHeaders.map((header, headerInd) => (
                    <TableCell
                      key={uid(headerInd)}
                      align="center"
                      onClick={() => {
                        if (header.isClickable) {
                          header.handleClick(tableDatum);
                        }
                      }}
                      sx={
                        header.isClickable && {
                          "&:hover": {
                            textDecoration: "underline",
                          },
                          cursor: "pointer",
                          color: "blue",
                        }
                      }>
                      {[header?.tableValue] == "launch_date_utc"
                        ? tableDatum?.[header?.tableValue].slice(0, 10)
                        : tableDatum?.[header?.tableValue]}
                    </TableCell>
                  ))}

                  {showIcon && (
                    <TableCell align="center">
                      <Tooltip
                        title={
                          "Go to " + process.env.NEXT_PUBLIC_ENV_PATIENT_NAME
                        }
                        onClick={handleIcon.bind(this, datumInd, tableDatum)}>
                        <IconButton>
                          <PersonRounded sx={{ fill: "#686868" }} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  )}
                  {(showEdit || showDelete || showOpen || showDownload) && (
                    <TableCell align="center">
                      {showEdit && (
                        <Tooltip
                          title="Edit"
                          onClick={handleEdit.bind(
                            this,
                            datumInd
                            // tableDatum
                          )}>
                          <IconButton>
                            <ModeEditOutlineRounded sx={{ fill: "#00b159" }} />
                          </IconButton>
                        </Tooltip>
                      )}
                      &nbsp;&nbsp;
                      {showOpen && (
                        <Button
                          onClick={handleOpen.bind(this, datumInd, tableDatum)}>
                          Open
                        </Button>
                      )}
                      &nbsp;&nbsp;
                      {showDelete && (
                        <Tooltip
                          title="Delete"
                          onClick={handleDelete.bind(
                            this,
                            datumInd,
                            tableDatum
                          )}>
                          <IconButton>
                            <HighlightOffRounded sx={{ fill: "#ea1601" }} />
                          </IconButton>
                        </Tooltip>
                      )}
                      &nbsp;&nbsp;
                      {showDownload && (
                        <Tooltip
                          title="Download"
                          onClick={handleDownload.bind(
                            this,
                            datumInd,
                            tableDatum
                          )}>
                          <IconButton>
                            <FileDownloadRounded sx={{ fill: "#686868" }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableCell colSpan={tableHeaders?.length + 1}>
                <Alert variant="standard" severity="info">
                  No data available
                </Alert>
              </TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
          component="div"
          count={tableData.length}
          page={activePage - 1}
          onPageChange={(e, p) => setActivePage(p + 1)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => setRowsPerPage(e.target.value)}
          sx={{ "& p": { margin: 0 } }}
        /> */}
    </Box>
  );
};
