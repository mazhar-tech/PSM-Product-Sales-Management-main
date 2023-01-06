import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../style/order.scss";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddProduct from "./AddProduct";
import Box from "@mui/material/Box";
import OrderDetail from "./OrderDeatail";
import Snackbar from "@mui/material/Snackbar";
import { COLORS } from "../assets/color";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  // border: "2px solid " + COLORS.primary,
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.primary,
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "order_id", label: "Order ID", minWidth: 90, align: "center" },
  { id: "order_name", label: "Order Name", minWidth: 160, align: "center" },
  {
    id: "customer_name",
    label: "Customer Name",
    minWidth: 150,
    align: "center",
  },
  {
    id: "location",
    label: "Location",
    minWidth: 150,
    align: "center",
  },
  {
    id: "order_status",
    label: "Order Status",
    minWidth: 130,
    align: "center",
  },
  {
    id: "delivered_time",
    label: "Delivered Time",
    minWidth: 130,
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 80,
  },
  {
    id: "order_detail",
    label: "Order Detail",
    minWidth: 170,
    align: "center",
  },
];

function createData(
  order_id,
  order_name,
  customer_name,
  location,
  order_status,
  delivered_time,
  price,
  order_detail
) {
  return {
    order_id,
    order_name,
    customer_name,
    location,
    order_status,
    delivered_time,
    price,
    order_detail,
  };
}

const OrderList = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const order_detail = (
    <Button
      variant="contained"
      onClick={handleOpen}
      size="small"
      style={{ background: COLORS.green[500] }}
    >
      Order Detail
    </Button>
  );

  const rows = [
    createData(
      "1",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "2",
      "Mango Pie",
      "Krisiten",
      "Old Town",
      <span className="canceled_order">Cancelled</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "3",
      "Fried Edd Sandwich",
      "Jack Suit",
      "Islambad",
      <span className="delivered_order">Delivered</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "4",
      "Lemon Yogurt",
      "Alesdro ",
      "Peshawar",
      <span className="delivered_order">Delivered</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "5",
      "Spicy Grill Sanswich",
      "Jacob Sahwny",
      "Lahore",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "6",
      "Sandwich",
      "Jhon Leo",
      "Karachi",
      <span className="canceled_order">Cancelled</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "7",
      "Spaghetti",
      "Multan",
      "Ishtiaq Ahmad",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "8",
      "Fried Rice",
      "Faisal Abad",
      "Sohail Ahmad",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "9",
      "Noodles",
      "Jhon Leo",
      "M Ibrahim",
      <span className="delivered_order">Delivered</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "10",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "11",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "12",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "13",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "14",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "15",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
    createData(
      "16",
      "French Fries",
      "Jhon Leo",
      "New Town",
      <span className="pending_order">Pending</span>,
      "10:05",
      10,
      order_detail
    ),
  ];

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setState({ ...state, [anchor]: open });
  // };

  return (
    <div className="order">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderDetail />
        </Box>
      </Modal>

      <div style={{ padding: "30px" }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 640 }}>
            <Table aria-label="customized table">
              <TableHead>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
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
                        key={row.order_id}
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
      </div>
    </div>
  );
};

export default OrderList;
