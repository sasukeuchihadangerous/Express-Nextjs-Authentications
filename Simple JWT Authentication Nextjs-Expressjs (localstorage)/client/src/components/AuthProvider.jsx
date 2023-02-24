import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../reducers/userReducer';
import AuthService from '../API/AuthService';

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAuth = async () => {
            const response = await AuthService.auth();
            if(!response.data?.error) {
                dispatch(setUser(response.data.user));
            }
        }
        fetchAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
            {children}
        </>
    )
    
}

export default AuthProvider