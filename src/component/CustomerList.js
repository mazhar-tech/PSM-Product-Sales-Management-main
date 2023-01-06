import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { COLORS } from "../assets/color";
import AddCustomer from "./AddCustomer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.primary,
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "customer_id", label: "Customer ID", minWidth: 113, align: "center" },
  {
    id: "customer_name",
    label: "Customer Name",
    minWidth: 190,
    align: "center",
  },
  {
    id: "location",
    label: "Location",
    minWidth: 190,
    align: "center",
  },
  {
    id: "email_id",
    label: "Email ID",
    minWidth: 140,
    align: "center",
  },
  {
    id: "orderd_item",
    label: "Ordered Item",
    minWidth: 120,
    align: "center",
  },
  {
    id: "bill",
    label: "Bill",
    minWidth: 80,
    align: "center",
  },
  {
    id: "block",
    label: "Block Customer",
    minWidth: 130,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
];
function createData(
  customer_id,
  customer_name,
  location,
  email_id,
  orderd_item,
  bill,
  block
) {
  //   const orderd_item = location / email_id;
  return {
    customer_id,
    customer_name,
    location,
    email_id,
    orderd_item,
    bill,
    block,
  };
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  // border: "2px solid " + COLORS.primary,
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const CustomerList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const [_openModal, setOpenModel] = React.useState(false);
  const handleModalOpen = () => setOpenModel(true);
  const _handleModalClose = () => setOpenModel(false);

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const block_button = (
    <Button
      onClick={handleClick({
        vertical: "top",
        horizontal: "center",
      })}
      variant="contained"
      size="small"
      className="reject_button"
    >
      Block
    </Button>
  );
  const rows = [
    createData(
      "01475",
      "Joe",
      "street 21",
      "ali@gmail.com",
      "sandwich",
      46,
      block_button
    ),
    createData(
      "02351",
      "Max Marsh",
      "Hall Street",
      "max@gmail.como",
      "Noodles",
      56,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
    createData(
      "12123",
      "Herry Fries",
      "JK Road",
      "herry@gmail.com",
      "Burger",
      49,
      block_button
    ),
  ];

  return (
    <div>
      <Button
        onClick={handleModalOpen}
        variant="contained"
        style={{
          float: "right",
          marginTop: "15px",
          marginBottom: "15px",
          color: COLORS.white,
          backgroundColor: COLORS.btnBG,
        }}
      >
        Add Client
      </Button>
      <Modal
        open={_openModal}
        onClose={_handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddCustomer />
        </Box>
      </Modal>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.customer_name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        // message="Do you want to reject this Order?"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Do you want to Block this Customer?
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ background: "#ffff", color: "black" }}
            >
              No
            </Button>
          </div>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomerList;
