import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { remove } from '../../store/cartSlice';
import { totalPriceSet } from "../../store/priceReducer"
import { useSelector } from "react-redux"
import Layout from '../../components/layout/Layout';
import "./Cart.css"
import { NavLink } from 'react-router-dom';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // const [counter, setCounter] = useState(1);
  const [selectedValue, setSelectedValue] = useState(1);

  const [quantities, setQuantities] = useState({});
  // const handleSelectChange = (event) => {
  //   const value = event.target.value;
  //   setSelectedValue(value);
  // }

  const removeProduct = (id) => {
    console.log(id)
    dispatch(remove(id))
  };

  // const priceUpdate = (v) => {
  //   console.log(v);
  // }

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
    
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      const quantity = quantities[product.productId] || 1;
      totalPrice += product.price * quantity;
    });
    return totalPrice;
  };

  const  getTotalPriceForCheckoue = () => {
    const totalPrice = getTotalPrice();
    dispatch(totalPriceSet(totalPrice))

  }
  const cartsProducts = products.map((i) => (
    <div className="cart-content justify-content-between">
      <div className="prd-det">
        {/* <h6>PRODUCT DETAILS</h6> */}
        <div className="d-flex">
          <img
            src={i.searchImage}
            alt=""
            className="prd-img"
          />
          <div>
            <p className="product-name ps-4 fw-bold">
              {i.productName.substring(0, 25)}...
            </p>
            <p className="size-data ps-4">{i.availableSizeData} </p>

            <div className="discount d-flex">
              <div className="fw-bold ps-4">{i.price}/-</div>
              <div className="ps-2 striked-out text-secondary"><s>{i.mrp}/-</s></div>
              <div className="ps-2 text-success fw-bold">{i.discountDisplayLabel}</div>
              <div></div>

            </div>

            <div className="mob-des">
              <div className="quantity-selector ms-4">
                <div className='d-flex'>
                  <label for="selector" className='qty-text-mobile'>Qty:</label>
                  <button
                    className='quantity-button'
                    onClick={() => updateQuantity(i.productId, quantities[i.productId] !== undefined ? Math.max(1, quantities[i.productId] - 1) : 1)}          >
                    <CiCircleMinus size={28} />
                  </button>
                  <h6 className='qty-display mx-1'>{quantities[i.productId] || 1}</h6>
                  <button
                    className='quantity-button'
                    onClick={() => updateQuantity(i.productId, (quantities[i.productId] || 1) + 1)}>
                    <CiCirclePlus size={28} />
                  </button>
                </div>

              </div>
              <div className="fw-bold">{quantities[i?.productId] > 0 ? quantities[i?.productId]*i?.price : i?.price}/-</div>
            </div>

            <button className="rem-btn" onClick={() => removeProduct(i.productId)}>Remove</button>
          </div>
        </div>
      </div>

      <div className="quant text-center">
        <div className='d-flex'>
          <button
            className='quantity-button'
            onClick={() => updateQuantity(i.productId, quantities[i.productId] !== undefined ? Math.max(1, quantities[i.productId] - 1) : 1)}          >
            <CiCircleMinus size={28} />
          </button>
          <h6 className='qty-display mx-2'>{quantities[i.productId] || 1}</h6>
          <button
            className='quantity-button'
            onClick={() => updateQuantity(i.productId, (quantities[i.productId] || 1) + 1)}>
            <CiCirclePlus size={28} />
          </button>
        </div>
      </div>

      <div className="total-amt text-center">
        {/* <h6>PRICE</h6> */}
        <div className=" fw-bold">{quantities[i?.productId] > 0 ? quantities[i?.productId]*i?.price : i?.price}/-</div>
      </div>
    </div>
  ))
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            {cartsProducts?.length > 0 ? <div><div className="d-flex justify-content-between shopping-cart head-border mt-0">
              <h5 className="fw-bold">Shopping Cart</h5>
              <h5 className="fw-bold"> items</h5>
            </div>
              <div className="pt-3 header-table d-flex justify-content-between">
                <h6 className="pd me-5 fw-bold">PRODUCT DETAILS</h6>
                <h6 className="qnt fw-bold">QUANTITY</h6>
                {/* <h6 className="pr ms-5 fw-bold">PRICE</h6> */}
                <h6 className="td fw-bold">PRICE</h6>
              </div></div>
              : <div></div>}
            {cartsProducts?.length > 0 ? cartsProducts : <div>
              <h1 className='text-center mt-4'><CiShoppingCart size={80} /></h1>
              <h2 className='text-center'>Your cart is empty</h2>
              <p className='text-center mb-5'>Looks like you have not added any items to cart. Go ahead and explore </p>
            </div>}
          </div>
        </div>
        <NavLink to="/men"><button className="cont-btn fw-bold pt-4">
          &larr; Continue shopping
        </button></NavLink>
      </div>
      <hr />
      <div className='d-flex justify-content-end container'>
        <h6 className='shopping-cart-estimate'>Estimated total : <span className='text-light-css'> &nbsp;<FaIndianRupeeSign />{getTotalPrice()}.00 INR</span> </h6>
      </div>
      <div className='d-flex justify-content-end container'>
        <h6>Taxes, discounts and shipping calculated at checkout</h6>
      </div>
      <div className='d-flex justify-content-end container'>
         {getTotalPrice() == 0 &&          
         <button className='checkout-cart-btn my-3'>Check out</button>
          }
          {getTotalPrice() > 0 &&
          <NavLink to="/checkOut">
            <button className='checkout-cart-btn1 my-3' onClick={() => getTotalPriceForCheckoue()}>Check out</button>
          </NavLink>}
      </div>
    </Layout>
  )
}

export default Cart