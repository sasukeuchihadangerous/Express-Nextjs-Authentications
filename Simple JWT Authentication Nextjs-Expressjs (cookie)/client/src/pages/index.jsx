import Link from 'next/link'
import AuthProvider from '@/services/AuthProvider';
import Logout from '@/services/Logout';
import { useRouter } from 'next/router';

const Index = ({isAuth, user}) => {
    const router = useRouter();
    return (
        <>
            <div>
                <h1 style={{fontSize: '20px', marginBottom: '20px'}}>Простейшая JWT Авторизация Next.js 13 - Express.js (cookie)</h1>
                {!isAuth && <Link href="/register" style={{marginRight: '10px'}}>Регистрация</Link> }
                {!isAuth && <Link href="/login">Авторизация</Link> }
                {isAuth && <a onClick={e=> Logout(router)}>Выйти</a>}
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const {isAuth, user} = await AuthProvider(context);
    return { props: { isAuth, user } }
}


export default Index;
