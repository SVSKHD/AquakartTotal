import React, { useState } from "react";
import { Card, Button, Tooltip } from "react-bootstrap";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  // destructure
  const { images, title, description, slug, price } = product;
  return (
    <>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <Card className="aqua-product-card">
        <Card.Img
          variant="top"
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <Card.Body>
          <div className="aqua-product-title">{title}</div>
          {product && product.ratings && product.ratings.length > 0 ? (
            showAverage(product)
          ) : (
            <div className="text-center pt-1 pb-3">No rating yet</div>
          )}
        </Card.Body>
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>
        ,
        <Tooltip title={tooltip}>
          <a onClick={handleAddToCart} disabled={product.quantity < 1}>
            <ShoppingCartOutlined className="text-danger" /> <br />
            {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
          </a>
        </Tooltip>
      </Card>
    </>
    // <>
    //   {product && product.ratings && product.ratings.length > 0 ? (
    //     showAverage(product)
    //   ) : (
    //     <div className="text-center pt-1 pb-3">No rating yet</div>
    //   )}
    //
    //   <Card
    //     cover={
    //       <img
    //         src={images && images.length ? images[0].url : laptop}
    //         style={{ height: "150px", objectFit: "cover" }}
    //         className="p-1"
    //       />
    //     }
    //     actions={[
    //       <Link to={`/product/${slug}`}>
    //         <EyeOutlined className="text-warning" /> <br /> View Product
    //       </Link>,
    //       <Tooltip title={tooltip}>
    //         <a onClick={handleAddToCart} disabled={product.quantity < 1}>
    //           <ShoppingCartOutlined className="text-danger" /> <br />
    //           {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
    //         </a>
    //       </Tooltip>,
    //     ]}
    //   >
    //     <Meta
    //       title={`${title} - $${price}`}
    //       description={`${description && description.substring(0, 40)}...`}
    //     />
    //   </Card>
    // </>
  );
};

export default ProductCard;
