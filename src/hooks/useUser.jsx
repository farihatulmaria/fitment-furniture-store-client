import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import auth from '../firebase';

const useUser = () => {
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
    });
    return [user];
};

export default useUser;