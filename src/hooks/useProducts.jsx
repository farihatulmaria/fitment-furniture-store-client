import axios from 'axios';
import { useState } from 'react';
const useProducts = () => {

    const [products, setProducts] = useState([]);
    
    const url = 'https://fitment-furniture-store.herokuapp.com/inventory';
        axios.get(url)
        .then(res => {
            setProducts(res.data);
        })

    return [products];
};

export default useProducts;