import React, { useState, useEffect } from "react";
import "../Product Page/ProductPage.css";
import { FiChevronRight } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import des from "./des";
// import { IoIosStar } from "react-icons/io";
import data from "../../datas/myntra.json";
import { Carousel } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Layout from "../../components/layout/Layout";
import { useDispatch } from "react-redux"
import { add } from "../../store/cartSlice";

const ProductPage = () => {
  const location = useLocation();
  const pathnameSegments = location.pathname.split("/");
  const targetSegmentIndex = 2;
  const targetSegment = pathnameSegments[targetSegmentIndex] || "Not Found";
  // const [counter, setCounter] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (product) => {
    console.log(product)
    console.log("Product to be added to cart:", product);

    dispatch(add(product))
  };
  return (
    <Layout>
      {data?.productsimg?.map((i) => (
        <div>
          {i?.ProductsDetails
            ?.filter((item) => {
              return targetSegment == item.productId
            })
            .map((prod) => (
              <div>
                <div className="container product">
                  <div class="row">
                    <div class="col-sm-7 image-view-block align-self-start">
                      <div className="lap-screen-image-carousel">
                        {prod.images
                          .slice(0, 4)
                          .map((imag) => (
                            <img
                              className="product-image-block"
                              src={imag.src}
                              alt=""
                            />
                          ))}
                      </div>

                      <Carousel fade className="mobile-screen-carousel">
                        {prod.images.map((path, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="product-image-block"
                              src={path.src}
                              alt=""
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </div>
                    <div class="col-sm-5  align-self-start">
                      <div class="description">
                        <h4 className="product-page-product-name">
                          {prod.productName}
                        </h4>
                        <div className="star">
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={prod.rating.toFixed(2)}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
                          {prod.rating.toFixed(2)} Ratings
                        </div>

                        <h4 className="price">${prod.price}</h4>
                        <h4 className="taxes">Inclusive of all taxes</h4>

                        <div className="size">
                          {prod.sizes.map((k) => (
                            <label class="custom-radio-label">
                              <div class="custom-radio"></div>
                              <p
                                className={
                                  selectedSize === k ? "size-selected" : "size-btn"
                                }
                              >
                                {k}
                              </p>
                              <input
                                type="radio"
                                name="radioOption"
                                value={k}
                                // checked={selectedSize === {k}}
                                onChange={(e) => setSelectedSize(e.target.value)}
                              />
                            </label>
                          ))}
                        </div>

                        <div className="quantity-selector mt-3">
                          <label for="selector">Qty:</label>

                          <select
                            name="selector"
                            size="1"
                            onclick="size=(size!=1)?1:10;"
                            onblur="size=1"
                            className="qnt-sel ms-2"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                        <NavLink to="/cartItems"><button className="buy-now">Buy Now</button></NavLink>
                        <div className="d-flex justify-content-between mb-4">
                        <button onClick={() => handleAddToCart(prod)} className="cart-btn">Add to cart</button>
                        <button className="hrt-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.58983 14.4979C2.24858 10.3104 3.81608 5.52415 8.21233 4.1079C10.5248 3.36165 13.0773 3.80165 14.9998 5.2479C16.8186 3.84165 19.4648 3.36665 21.7748 4.1079C26.1711 5.52415 27.7486 10.3104 26.4086 14.4979C24.3211 21.1354 14.9998 26.2479 14.9998 26.2479C14.9998 26.2479 5.74733 21.2129 3.58983 14.4979Z"
                                stroke="#26221F"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M20 8.375C21.3375 8.8075 22.2825 10.0013 22.3962 11.4025"
                                stroke="#26221F"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {des.map((des, j) => (
                        <div className="" key={j}>
                          <div className="item-sec">
                            <h4 className="fw-bold mb-4">Product Description</h4>
                            <h6 className="mb-4">Item No. {prod.productId}</h6>
                            <p className="text-justify">{des.description}</p>
    
                            <div>
                              {des.specifations
                              .slice(0,4)
                              .map((j) => (
                                <li className="description-list">{j}</li>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </Layout>
  );
};

export default ProductPage;
