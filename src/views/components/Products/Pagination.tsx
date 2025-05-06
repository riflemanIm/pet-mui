import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

export interface PaginationProps {
  currentPage: number;
  pages: number;
  onClick?: (page: number) => void;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "standard";
}

export default function Pagination({
  currentPage,
  pages,
  onClick,
  size = "medium",
  color = "primary",
}: PaginationProps) {
  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onClick?.(page);
  };

  return (
    <MuiPagination
      count={pages}
      page={currentPage}
      onChange={handleChange}
      size={size}
      color={color}
      showFirstButton
      showLastButton
      siblingCount={1}
      boundaryCount={1}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
      }}
    />
  );
}
