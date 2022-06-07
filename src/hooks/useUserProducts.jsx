import axios from 'axios';
import { useState } from 'react';
import useUser from './useUser';
const useUserProducts = () => {
    const [userProducts, setUserProducts] = useState({});
    const [user] = useUser();
    const url = `https://fitment-furniture-store.herokuapp.com/userItems?email=${user.email}`;
        axios.get(url,{
            headers:{
                authorization : `user ${localStorage.getItem('accessToken')}`,
            }
        })
        .then(res => {
            setUserProducts(res.data);
        })

    return [userProducts];
};

export default useUserProducts;