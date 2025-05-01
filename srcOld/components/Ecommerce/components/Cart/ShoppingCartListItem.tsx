import * as React from "react";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useRecoilState } from "recoil";
import { shoppingCartState } from "../../../../atoms";

import { ShoppingCartItemProps } from "../../../../types";
import { currencyFormat } from "../../../../helpers/utils";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
//import { buyBook } from "lib/http";
import HandCounter from "../../../HandCounter";
import { deleteItemShoppingCart } from "../../../../selectors";

export default function ShoppingCartListItem(props: ShoppingCartItemProps) {
  const {
    id,
    title,
    type,
    price,
    averageRating,
    quantityInCart,
    createdAt,
    img,
  } = props;

  const [loading, setLoading] = React.useState(false);
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);

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
        <HandCounter id={id} />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1" fontWeight="bold" mt={2}>
          {currencyFormat(parseFloat(price) * quantityInCart)}₽
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => deleteItemShoppingCart(setShoppingCart, id)}
        >
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
                  disabled={quantityInCart >= stock}
                  onClick={handleAddQty}
                >
                  <AddIcon />
                </button>
                <input
                  className="input input-sm input-bordered join-item w-12"
                  value={quantityInCart}
                  disabled
                />
                <button
                  className="btn btn-sm join-item"
                  disabled={quantityInCart <= 1}
                  onClick={handleRemoveQty}
                >
                  <RemoveIcon />
                </button>
              </div>
              <div className="flex justify-end gap-4">
                <div className="font-bold">
                  <span className="pr-1">
                    {quantityInCart === 1
                      ? `(${quantityInCart} item) $`
                      : `(${quantityInCart} items) $`}
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
