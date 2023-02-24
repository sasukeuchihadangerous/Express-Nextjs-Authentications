import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '@/reducers';
import AuthProvider from '@/components/AuthProvider';

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Component {...pageProps}/>
            </AuthProvider>
        </Provider>
    )
}


