// import React from 'react'
// import { DataGrid } from '@mui/x-data-grid';
// import Typography from "@mui/material/Typography";

// const columns = [
//   { field: 'id', headerName: 'Order ID', width: 80, align:'center' },
//   { field: 'orderName', headerName: 'Order Name', width: 150,  },
//   { field: 'customerName', headerName: 'Customer Name', width: 150,},
//   {
//     field: 'location',
//     headerName: 'Location',
//     width: 150,
//   },
//   {
//     field: 'orderStatus',
//     headerName: 'Order Status',
//     width: 120,
//     align:'center',},
    
//    {
//     field: 'deliveredTime',
//     headerName: 'Delivered Time',
//     width: 125,
//     align:'center'
//   },
//    {
//     field: 'price',
//     headerName: 'Price',
//     width: 60,
//     align:'center'
//   },
//   {
//     field: 'except',
//     headerName: 'Except',
//     width: 100,
//   },
//   {
//     field: 'reject',
//     headerName: 'Reject',
//     width: 100,
//   },
// ];

// const rows = [
//   { id: 1, customerName: 'Snow', orderName: 'Jon', location: 'Islambad',orderStatus: 'Pending', deliveredTime: '12:05', price: `$20`, except:`${<strong>'esg'</strong>}` },
//   { id: 2, customerName: 'Lannister', orderName: 'Cersei', location: 'Karchi',orderStatus: 'Cancelled', deliveredTime: '12:05', price: `$20` },
//   { id: 3, customerName: 'Lannister', orderName: 'Jaime', location: 'Lahore', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
//   { id: 4, customerName: 'Stark', orderName: 'Arya', location: 'Peshawar', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
//   { id: 5, customerName: 'Targaryen', orderName: 'Daenerys', location: 'Faisal Abad', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
//   { id: 6, customerName: 'Melisandre', orderName: null, location: 'Rawalpindi', orderStatus: 'Delivered', deliveredTime: '12:05', price: `$20` },
//   { id: 7, customerName: 'Clifford', orderName: 'Ferrara', location: 'Gujrat',orderStatus: 'Pending', deliveredTime: '12:05', price: `$20` },
//   { id: 8, customerName: 'Frances', orderName: 'Rossini', location: 'HaidarAbad', orderStatus: 'Cancelled', deliveredTime: '12:05', price: `$20` },
//   { id: 9, customerName: 'Roxie', orderName: 'Harvey', location: 'Sahiwal', orderStatus: 'Cancelled', deliveredTime: '12:05', price: `$20` },
// ];

import React, {useState} from 'react'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import '../style/dashboard.scss'
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fbbe36",
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "order_id", label: "Order ID", minWidth: 90, align:'center' },
  { id: "order_name", label: "Order Name", minWidth: 170 },
  {
    id: "customer_name",
    label: "Customer Name",
    minWidth: 170,
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
  },
  {
    id: "order_status",
    label: "Order Status",
    minWidth: 120,
    align:'center'
  },
  {
    id: "delivered_time",
    label: "Delivered Time",
    minWidth: 130,
    align:'center'
  },
  {
    id: "price",
    label: "Price",
    minWidth: 70,
    align:'center'
  },
   {
    id: "except",
    label: "Except",
    minWidth: 120,
    align:'center'
  },
   {
    id: "reject",
    label: "Reject",
    minWidth: 120,
    align:'center'
  },
];

function createData(order_id, order_name, customer_name, location,order_status,  delivered_time,price, except, reject) {
  return { order_id, order_name, customer_name, location,order_status, delivered_time, price, except, reject };
}



const OrderTable = () => {
    // return (
    //   <div className="_order_head">
    //     <Typography variant="h6" gutterBottom component="div" >
    //       RECENTLY PLACED ORDERS
    //     </Typography>
      
    //     <div className="order_table" >
        
    //   <DataGrid
    //     rows={rows}
    //     columns={columns}
    //     pageSize={5}
    //     rowsPerPageOptions={[5]}
    //     checkboxSelection
    //   />
    // </div>
    // </div>
    // )
// }
const [page, setPage] =useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
    const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
   const handleClose = () => {
    setState({ ...state, open: false });
  };
const accept_button = (
   <Button // onClick={handleOpen}
        variant="contained"
        size='small'
        className="accept_button"
        >Accept</Button>
)
const reject_button =(
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'center',
        })}
        variant="contained"
        size='small'
         className="reject_button" >reject</Button>
)

const rows = [
  createData("1", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10, accept_button, reject_button),
  createData("2", "Mango Pie", 'Krisiten',"Old Town", <span className="canceled_order">Cancelled</span>, '10:05', 10, accept_button, reject_button
  ),
  createData("3", "Fried Edd Sandwich", 'Jack Suit',"Islambad", <span className="delivered_order">Delivered</span>, '10:05', 10, accept_button, reject_button),
  createData("4", "Lemon Yogurt", 'Alesdro ',"Peshawar", <span className="delivered_order">Delivered</span>, '10:05', 10,  accept_button, reject_button),
  createData("5", "Spicy Grill Sanswich", 'Jacob Sahwny',"Lahore", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button),
  createData("6", "Sandwich", 'Jhon Leo',"Karachi", <span className="canceled_order">Cancelled</span>, '10:05', 10,accept_button, reject_button),
  createData("7", "Spaghetti", 'Multan',"Ishtiaq Ahmad", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button ),
  createData("8", "Fried Rice", 'Faisal Abad',"Sohail Ahmad", <span className="pending_order">Pending</span>, '10:05', 10, accept_button, reject_button),
  createData("9", "Noodles", 'Jhon Leo',"M Ibrahim", <span className="delivered_order">Delivered</span>, '10:05', 10,accept_button, reject_button ),
  createData("10", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button),
  createData("11", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button ),
  createData("12", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button),
  createData("13", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button  ),
  createData("14", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button ),
  createData("15", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button  ),
  createData("16", "French Fries", 'Jhon Leo',"New Town", <span className="pending_order">Pending</span>, '10:05', 10,accept_button, reject_button),
];

    return (
        <div className="order">
         <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        // message="Do you want to reject this Order?"
        key={vertical + horizontal}
      >
      <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
    Do you want to Reject this Order?
    <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px'}}> 
        <Button variant="contained" size='small' style={{background:'#ffff', color:'black'}} >Yes</Button>
        <Button variant="contained" size='small' style={{background:'#ffff', color:'black'}}>No</Button>
         </div>
  </Alert>
      </Snackbar>
        <div className="order_head">
             <Typography variant="h6" component="div" gutterBottom>
         RECENTLY PLACED ORDERS
        </Typography>
        </div>
      <Divider />
      <div style={{padding:'30px'}}>
      <Paper sx={{ width: "100%", overflow: "hidden" }} >
        <TableContainer sx={{ maxHeight: 640 }}>
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
          rowsPerPageOptions={[6, 25, 100]}
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
    )
}

export default OrderTable
