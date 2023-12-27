import React, { ReactNode, memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SubNav from '@/compponents/subNav';

interface PropType {
    children?: ReactNode;
}

const Discover: React.FC<PropType> = () => {
    return (
        <>
            <SubNav />
            <Suspense fallback="">
                <Outlet />
            </Suspense>
        </>
    );
};

export default memo(Discover);
