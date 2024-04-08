import React from 'react'
import {useDispatch} from "react-redux";
import { remove } from '../../store/cartSlice';
import {useSelector} from "react-redux"
import Layout from '../../components/layout/Layout';

const Cart = () => {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

  return (
    <Layout>
        <pre>{JSON.stringify(products,null,2)}</pre>
    </Layout>
  )
}

export default Cart