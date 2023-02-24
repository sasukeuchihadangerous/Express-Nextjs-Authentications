import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '@/reducers/userReducer';
const Index = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h1 style={{fontSize: '20px', marginBottom: '20px'}}>Простейшая JWT Авторизация Next.js 13 - Express.js (localstorage)</h1>
                {!isAuth && <Link href="/register" style={{marginRight: '10px'}}>Регистрация</Link> }
                {!isAuth && <Link href="/login">Авторизация</Link> }
                {isAuth && <a onClick={e=> dispatch(logout())}>Выйти</a>}
            </div>
        </>
    );
}

export default Index;
