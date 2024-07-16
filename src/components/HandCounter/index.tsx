import { useState } from "react";
import { Button, ButtonGroup, Icon, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface HandCounterProps {
  stock: number;
  quantity: number;
  handleAddQty: () => void;
  handleRemoveQty: () => void;
}

export default function HandCounter({
  stock,
  quantity,
  handleAddQty,
  handleRemoveQty,
}: HandCounterProps) {
  return (
    <ButtonGroup
      color="secondary"
      size="small"
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: ({ palette: { grey } }) => grey[300],
      }}
    >
      <Button
        size="small"
        variant="text"
        onClick={handleRemoveQty}
        disabled={quantity < 1}
      >
        <RemoveIcon />
      </Button>
      <Button variant="text" sx={{ cursor: "auto" }}>
        <Typography
          sx={{ width: 15 }}
          variant="h6"
          fontWeight="bold"
          color="secondary"
        >
          {quantity}
        </Typography>
      </Button>
      <Button
        size="small"
        variant="text"
        onClick={handleAddQty}
        disabled={quantity > stock}
      >
        <AddIcon />
      </Button>
    </ButtonGroup>
  );
}
