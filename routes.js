"use strict";
const express = require("express"); //import express
// const cartItems = require("./cart-items");
const router = express.Router(); //declare a variable initialized to a router object
const pool = require("./pg-connection-pool");

function selectAll(res) {
  pool
    .query("SELECT * FROM shoppingcart ORDER BY id")
    .then(results => res.json(results.rows));
}

router.get("/cart-items", (req, res) => {
  selectAll(res);
});

router.post("/cart-items", (req, res) => {
  pool
    .query(
      "INSERT INTO shoppingcart (product, price, quantity) VALUES ($1::text, $2::money, $3::int)",
      [req.body.product, req.body.price, req.body.quantity]
    )
    .then(() => {
      selectAll(res);
    });
});

router.put("/cart-items/:id", (req, res) => {
  pool
    .query(
      "UPDATE shoppingcart SET product=$1::text, price=$2::money, quantity=$3::int WHERE id=$4::int",
      [
        req.body.product,
        req.body.price,
        req.body.quantity,
        Number(req.params.id)
      ]
    )
    .then(() => {
      selectAll(res);
    });
});

router.delete("/cart-items/:id", (req, res) => {
  pool
    .query("DELETE FROM shoppingcart WHERE id=$1::int", [Number(req.params.id)])
    .then(() => {
      selectAll(res);
    });
});

module.exports = router;
