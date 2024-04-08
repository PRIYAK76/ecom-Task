import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { remove } from '../../store/cartSlice';
import { useSelector } from "react-redux"
import Layout from '../../components/layout/Layout';
import "./Cart.css"
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const [selectedValue, setSelectedValue] = useState(1);

  const [quantities, setQuantities] = useState({});
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  }

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter == 1 ? 1 : counter - 1);

  };


  const removeProduct = (id) => {
    console.log(id)
    dispatch(remove(id))
  };

  const priceUpdate = (v) => {
    console.log(v);
  }

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

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
                <label for="selector">Qty:</label>

                {/* <select
                name="selector"
                size="1"
                onclick="size=(size!=1)?1:10;"
                onblur="size=1"
                className="qnt-sel ms-1"
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
              </select> */}
              </div>
              <div className="fw-bold">{i.price}/-</div>
            </div>

            <button className="rem-btn" onClick={() => removeProduct(i.productId)}>Remove</button>
          </div>
        </div>
      </div>

      <div className="quant text-center">
        {/* <h6>QUANTITY</h6> */}
        {/* <div className="quantity-selector">
          <select
            name="selector"
            size="1"
            onclick="size=(size!=1)?1:10;"
            onblur="size=1"
            className="qnt-sel"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="0">0</option> 
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

          <p>{selectedValue}</p>
        </div> */}
        <button
                  onClick={() => updateQuantity(i.id, quantities[i.id] !== undefined ? Math.max(1, quantities[i.id] - 1) : 1)}
                >
                  -
                </button>
                {quantities[i.id] || 1}
                <button onClick={() => updateQuantity(i.id, (quantities[i.id] || 1) + 1)}>
                  +
                </button>
      </div>

      <div className="total-amt text-center">
        {/* <h6>PRICE</h6> */}
        <div className=" fw-bold">{i.price * selectedValue}/-</div>
      </div>

      {/* <div className="total text-center">
    <div className="pt-3 fw-bold">$289</div>
  </div> */}
    </div>
  ))
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="d-flex justify-content-between shopping-cart head-border mt-0">
              <h5 className="fw-bold">Shopping Cart</h5>
              <h5 className="fw-bold"> items</h5>

            </div>

            <div className="pt-3 header-table d-flex justify-content-between">
              <h6 className="pd me-5 fw-bold">PRODUCT DETAILS</h6>
              <h6 className="qnt fw-bold">QUANTITY</h6>
              {/* <h6 className="pr ms-5 fw-bold">PRICE</h6> */}
              <h6 className="td fw-bold">PRICE</h6>
            </div>
            {cartsProducts}
          </div>
        </div>
        <NavLink to="/men"><button className="cont-btn fw-bold pt-4">
          &larr; Continue shopping
        </button></NavLink>
      </div>
      {console.log('Updated products:', products)}
    </Layout>
  )
}

export default Cart