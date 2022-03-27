import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';
import ProductItem from './item';


const ProductStore = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err);
        });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='ui grid container' style={{marginTop: '10px'}}>
            <ProductItem />
        </div>
    );
}

export default ProductStore;