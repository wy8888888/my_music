import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const DJRadio: React.FC<PropType> = () => {
    return <div>DJRadio</div>;
};

export default memo(DJRadio);
