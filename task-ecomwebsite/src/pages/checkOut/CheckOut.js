import React from 'react'
import "./CheckOut.css";
import Navbar from "../../components/Navbar/Navbar"
import { useSelector } from "react-redux"

const CheckOut = () => {
    const products = useSelector(state => state.cart);

    const getTotalPrice = () => {
        let totalPrice = 0;
        products.forEach((product) => {
            totalPrice += product.price;
        });
        return totalPrice;
    };

    return (
        <div>
            <Navbar />
            <div className='row container mt-5'>
                <div className='col-6 col-6-edited'>
                    <form>
                        <div class="form-row">
                            <h5 className='my-2'>Contact</h5>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <h5 className='my-2'>Delivery</h5>
                        <div class="d-flex justify-content-between">
                            <div class="col-md-5 mb-3">
                                <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required />

                            </div>
                            <div class="col-md-6 mb-3">
                                <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>

                        <div class="form-group my-3">
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-row d-flex justify-content-between">
                            <div class="form-group ">
                                <input type="text" class="form-control" id="inputAddress2" placeholder="City" />
                            </div>
                            <div class="form-group">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                        </div>
                        <div class="form-group col-md-2 mt-3">
                            <input type="text" class="form-control" id="inputZip" placeholder='zip' />
                        </div>

                    </form>
                </div>
                <div className='col-6 col-6-edited col-mob-6'>
                    {products.map((i) => (
                        <div className="cart-content ">
                            <div className="d-flex justify-content-between ">
                                <img
                                    src={i.searchImage}
                                    alt=""
                                    className="prd-img-checkout"
                                />
                                <p className="product-name ps-4 fw-bold">
                                    {i.productName.substring(0, 25)}...
                                </p>
                                <p className="fw-bold ps-4">{i.price}/-</p>
                            </div>
                            <div className="total-amt text-center">
                            </div>
                        </div>))}
                    <div className='d-flex justify-content-between my-5'>
                        <h4>Total</h4>
                        <h4>Rs.{getTotalPrice()} /-</h4>
                    </div>
                    <div><button className='paypal-btn'>Pay with Paypal</button></div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut