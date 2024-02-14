import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { productsResponse } from "../../api/fetching.apis";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

type productsListProp = {
  products: Partial<productsResponse>[];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    position: number,
    projectId: number
  ) => Promise<void>;
  onClick: (index: number) => void;
};
export default function ProductsTable({
  products,
  onChange,
  onClick,
}: productsListProp) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [anchorElArray, setAnchorElArray] = useState(
    Array(products.length).fill(null)
  );
  const navigate = useNavigate();
  const handleOpenMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };
  const handleCloseMenu = (index: number) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };
  const handleNav = (selectedProductID: number | undefined) => {
    navigate(`/dashboard/edit-project/${selectedProductID}`);
  };
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, products.length - page * rowsPerPage);
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        boxShadow: "none",
      }}
    >
      <Table
        sx={{
          minWidth: 500,
          "& .MuiTableCell-root": {
            borderBottom: "none",
          },
          "& .MuiTableCell-root.MuiTableCell-head": {
            borderBottom: "1px solid #EFEFEF",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sold</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((product, index) => {
              return (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">
                    {/* {product.isSold ? "Sold" : "in Stock"} */}
                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                      checked={product.isSold}
                      disabled={product.isSold}
                      onChange={(event) => onChange(event, index, product.id)}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      id="icon-button"
                      onClick={(event) => handleOpenMenu(event, index)}
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Popover
                      id="popover"
                      open={!!anchorElArray[index]}
                      anchorEl={anchorElArray[index]}
                      onClose={() => handleCloseMenu(index)}
                      anchorOrigin={{ vertical: "top", horizontal: "left" }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem
                        id="edit"
                        onClick={() => {
                          handleCloseMenu(index);
                          handleNav(product?.id);
                        }}
                      >
                        Edit
                      </MenuItem>

                      <MenuItem
                        id="delete"
                        onClick={() => {
                          handleCloseMenu(index);
                          onClick(index);
                        }}
                        sx={{ color: "error.main" }}
                      >
                        Delete
                      </MenuItem>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={products.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
