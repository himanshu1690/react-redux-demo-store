import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductItem = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderProducts = products.map((product) => {
        return (
            <div className='column' key={product.id}>
                <Link  to={`/product/${product.id}`}>
                    <div className="ui card">
                        <a className="image" href="#" style={{background: 'white'}}>
                            <img className='image' src={product.image} alt={product.title} style={{height: '180px', width: 'auto', margin: '0 auto'}} />
                        </a>
                        <div className="content">
                            <a className="header" href="#">{ product.title } </a>
                            <div className="meta price">$ {product.price} </div>
                            <div className='meta'>{product.category}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    
    return (
        <div className='ui three column grid'>
            {renderProducts}
        </div>
    );
}

export default ProductItem;