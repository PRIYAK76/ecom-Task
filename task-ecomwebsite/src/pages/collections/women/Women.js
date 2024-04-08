import React from 'react'
import Layout from '../../../components/layout/Layout'
import data from "../../../datas/myntra.json";
import { IoIosStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsFillCartPlusFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "../collections.css";
import { useDispatch } from "react-redux";
// import { fetchProductRequest } from "../../actions/ProductActions";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { add } from "../../../store/cartSlice";

const Women = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    console.log(product)
    console.log("Product to be added to cart:", product);

    dispatch(add(product))
  };
  return (
    <Layout>

      {data.productsimg
        .filter((item) => item.name === "women")
        .map((items) => (
          <div className='product-card-filter-page'>
            {items.ProductsDetails.map((product) => (
              <div className="product-card">
                <button className="image-btn">
                  <NavLink to={`/products/${product.productId}`} >
                    <img
                      src={product.searchImage}
                      className="product-cart-image"
                      alt=""
                    />
                  </NavLink>
                </button>
                <span>
                  <IoMdHeartEmpty size={27} className="wishlist-icon" />

                  {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} className="wishlist-icon" /> */}
                </span>

                <h1 className="product-card-name1 mt-2 text-center fw-bold">
                  {product?.productName?.substring(11, 30)}
                </h1>


                <div className="d-flex justify-content-between">
                  <div className='d-flex'><p className="product-card-price mt-2">
                    ${product.price}&nbsp;&nbsp;
                  </p>
                    <div className="stars mt-1">
                      <Stack spacing={1}>
                        <Rating
                          name="size-small"
                          defaultValue={product?.rating?.toFixed(2)}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                      </Stack>
                    </div></div>
                  <div className="d-flex mx-auto ">
                    {/* Add to cart &nbsp; */}
                    <BsFillCartPlusFill size={25} style={{"cursor" : "pointer"}} onClick={() => handleAddToCart(product)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </Layout>
  )
}

export default Women