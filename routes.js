"use strict";
const express = require("express");
const cartItems = require("./cart-items");
// router method used to...
const router = express.Router();

router.get("/cart-items", (req, res) => {
  res.json(cartItems);
});

router.post("/cart-items", (req, res) => {
  console.log(req.body);
  cartItems.push(req.body);
  res.json(cartItems);
});

router.put("/cart-items/:id", (req, res) => {
  // console.log(req.body);
  // console.log(typeof req.params.id);
  cartItems.splice(
    cartItems.findIndex(element => element.id == req.params.id),
    1,
    req.body
  );
  // for (let i = 0; i < cartItems.length; i++) {
  //   if (cartItems[i].id === req.params.id) {
  //     cartItems.splice(i, 1, req.body);
  //   }
  // }
  res.json(cartItems);
});

router.delete("/cart-items/:id", (req, res) => {
  // console.log(req.params.id);
  cartItems.splice(
    cartItems.findIndex(element => element.id == req.params.id),
    1
  );
  res.json(cartItems);
});

module.exports = router;
