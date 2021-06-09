const Cart = require("../models/cart");

exports.addItemToCart = (req, res, next) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (cart) {
      const product = req.body.cartItems.product;
      const item = cart.cartItems.find((c) => c.product == product);
      let condition, update;
      if (item) {
        condition = { user: req.user._id, "cartItems.product": product };
        update = {
          $set: {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: item.quantity + req.body.cartItems.quantity,
            },
          },
        };
      } else {
        condition = { user: req.user._id };
        update = {
          $push: {
            cartItems: req.body.cartItems,
          },
        };
      }
      Cart.findOneAndUpdate(condition, update).exec((error, cart) => {
        if (error) res.status(400).json(error);
        if (cart) {
          res.status(200).json({ cart });
        }
      });
    } else {
      const cart = new Cart({
        user: req.user._id,
        cartItem: [req.body.cartItems],
      });
      cart.save((error, cart) => {
        if (error) return res.status(400).json(error);
        if (cart) {
          return res.status(200).json({ cart });
        }
      });
    }
  });
};
