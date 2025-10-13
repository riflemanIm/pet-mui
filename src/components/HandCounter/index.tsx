import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useAppState } from "context/AppStateContext";

interface HandCounterProps {
  id: number | string;
}

export default function HandCounter({ id }: HandCounterProps) {
  const { shoppingCart, incrementCartItem, decrementCartItem } = useAppState();
  const numericId = typeof id === "string" ? Number(id) : id;
  const shoppingCartItem = shoppingCart.find((it) => it.id === numericId);

  if (shoppingCartItem == null) {
    return null;
  }
  const { quantityInCart, stock } = shoppingCartItem;

  return (
    <ButtonGroup
      color="secondary"
      size="small"
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: ({ palette: { grey } }) => grey[300],
        backgroundColor: "#fff",
      }}
    >
      <Button
        size="small"
        variant="text"
        onClick={() => decrementCartItem(numericId)}
        disabled={quantityInCart < 1}
      >
        <RemoveIcon />
      </Button>
      <Box m={1}>
        <Typography
          sx={{ width: 15 }}
          variant="h6"
          fontWeight="bold"
          color="secondary"
        >
          {quantityInCart}
        </Typography>
      </Box>
      <Button
        size="small"
        variant="text"
        onClick={() => incrementCartItem(numericId)}
        disabled={quantityInCart >= stock}
      >
        <AddIcon />
      </Button>
    </ButtonGroup>
  );
}
