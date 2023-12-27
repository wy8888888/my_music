import React, { ReactNode, memo, useEffect } from 'react';
import api from '@/service';

interface PropType {
    children?: ReactNode;
}

const My: React.FC<PropType> = () => {
    // const [count, setCount] = useEffect(0);

    useEffect(() => {
        api.get({
            url: '/banner'
        }).then((res) => {
            console.log(res);
        });
    });
    return <div>My</div>;
};

export default memo(My);
