import React, { Suspense, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { useRoutes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import routes from './router';
import Header from './compponents/header';
import BackTop from './compponents/back';
import GFooter from './compponents/footer';

const App: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);
    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
            <div className="App">
                <Header></Header>
                <Suspense fallback="">
                    <main>{useRoutes(routes)}</main>
                </Suspense>
                <GFooter></GFooter>
                <BackTop></BackTop>
            </div>
        </ConfigProvider>
    );
};

export default App;
