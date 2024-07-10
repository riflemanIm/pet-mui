import * as React from "react";
import Image from "next/image";
import { useSnackbar } from "notistack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useRecoilState } from "recoil";
import { shoppingCartState, currentUserState } from "atoms";

import { ShoppingCartItemProps } from "types";
import { currencyFormat, calcCartItemTotalPrice } from "helpers/utils";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
//import { buyBook } from "lib/http";

export default function ShoppingCartListItem(props: ShoppingCartItemProps) {
  const {
    id,
    title,
    type,
    price,
    averageRating,
    quantity,
    stock,
    createdAt,
    img,
  } = props;
  const [loading, setLoading] = React.useState(false);

  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const [currentUser] = useRecoilState(currentUserState);

  const { enqueueSnackbar } = useSnackbar();

  function handleAddQty() {
    setShoppingCart((oldShoppingCart) => {
      return oldShoppingCart.reduce<ShoppingCartItemProps[]>((prev, item) => {
        if (item.id === id) {
          prev.push({
            ...item,
            quantity: quantity + 1,
          });
        } else {
          prev.push(item);
        }
        return prev;
      }, []);
    });
  }

  function handleRemoveQty() {
    setShoppingCart((oldShoppingCart) => {
      return oldShoppingCart.reduce<ShoppingCartItemProps[]>((prev, item) => {
        if (item.id === id) {
          prev.push({
            ...item,
            quantity: quantity - 1,
          });
        } else {
          prev.push(item);
        }
        return prev;
      }, []);
    });
  }

  function deleteItem() {
    setShoppingCart((oldShoppingCart) => {
      return [...oldShoppingCart.filter((i) => i.id !== id)];
    });
  }

  const handleBuyClick = async () => {
    setLoading(true);
    // const response = await buyBook(id, {
    //   userID: currentUserId,
    //   quality: quantity,
    // });
    // if (response.error) {
    //   enqueueSnackbar(`Error: ${response.error}.`, {
    //     variant: 'error',
    //   });
    //   setLoading(false);
    //   return;
    // }
    // enqueueSnackbar(`${response.content?.message}`, {
    //   variant: 'success',
    // });
    // setLoading(false);
    // setShoppingCart((oldShoppingCart) => {
    //   return oldShoppingCart.filter((i) => i.id !== id);
    // });
  };

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`/images/catalog/${img}`}
          alt={title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Type: {type.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Price: {`$ ${currencyFormat(price)}`}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      {/* <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={`https://picsum.photos/seed/${id}/200/300`}
            alt={title}
            width={150}
            height={225}
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-col gap-1">
            <p>
              <span className="text-lg font-bold pr-4">Title:</span>
              {title}
            </p>
            <p>
              <span className="text-lg font-bold pr-4">Type:</span>
              {type.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)}
            </p>
            <p>
              <span className="text-lg font-bold pr-4">Publication date:</span>
              {new Date(createdAt).toLocaleDateString()}
            </p>
            <p>
              <span className="text-lg font-bold pr-4">Price:</span>
              {`$ ${currencyFormat(price)}`}
            </p>
            <p>
              <span className="text-lg font-bold pr-4">In stock:</span>
              {stock}
            </p>
            <div className="flex justify-between">
              <div className="join">
                <button
                  className="btn btn-sm join-item"
                  disabled={quantity >= stock}
                  onClick={handleAddQty}
                >
                  <AddIcon />
                </button>
                <input
                  className="input input-sm input-bordered join-item w-12"
                  value={quantity}
                  disabled
                />
                <button
                  className="btn btn-sm join-item"
                  disabled={quantity <= 1}
                  onClick={handleRemoveQty}
                >
                  <RemoveIcon />
                </button>
              </div>
              <div className="flex justify-end gap-4">
                <div className="font-bold">
                  <span className="pr-1">
                    {quantity === 1
                      ? `(${quantity} item) $`
                      : `(${quantity} items) $`}
                  </span>
                  {calcCartItemTotalPrice([props])}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button className="btn btn-sm btn-error" onClick={deleteItem}>
                Delete
              </button>
              <button
                className="btn btn-sm btn-info"
                onClick={handleBuyClick}
                disabled={loading}
              >
                {loading && <span className="loading loading-spinner" />}
                Proceed to Purchase
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
