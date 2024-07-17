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
import { Divider, Grid, IconButton, Typography } from "@mui/material";
//import { buyBook } from "lib/http";
import HandCounter from "components/HandCounter";

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
      const card = oldShoppingCart.reduce<ShoppingCartItemProps[]>(
        (prev, item) => {
          if (item.id === id) {
            prev.push({
              ...item,
              quantity: quantity + 1,
            });
          } else {
            prev.push(item);
          }
          return prev;
        },
        []
      );
      window.localStorage.setItem("card", JSON.stringify(card));
      return card;
    });
  }

  function handleRemoveQty() {
    setShoppingCart((oldShoppingCart) => {
      const card = oldShoppingCart.reduce<ShoppingCartItemProps[]>(
        (prev, item) => {
          if (item.id === id) {
            prev.push({
              ...item,
              quantity: quantity - 1,
            });
          } else {
            prev.push(item);
          }
          return prev;
        },
        []
      );
      window.localStorage.setItem("card", JSON.stringify(card));
      return card;
    });
  }

  function deleteItem() {
    setShoppingCart((oldShoppingCart) => {
      const card = [...oldShoppingCart.filter((i) => i.id !== id)];
      window.localStorage.setItem("card", JSON.stringify(card));
      return card;
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
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <Grid item xs={2} textAlign="center">
        <Image
          src={`/images/catalog/${img}`}
          alt={title}
          width={120}
          height={120}
          style={{ borderRadius: 3 }}
        />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Type: {type.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <HandCounter
          stock={stock}
          quantity={quantity}
          handleAddQty={handleAddQty}
          handleRemoveQty={handleRemoveQty}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          {currencyFormat(parseFloat(price) * quantity)}₽
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="delete" color="primary" onClick={deleteItem}>
          <DeleteOutlineIcon />
        </IconButton>
      </Grid>
      <Divider />

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
