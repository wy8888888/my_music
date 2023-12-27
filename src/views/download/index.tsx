import React, { ReactNode, memo } from 'react';

interface PropType {
    children?: ReactNode;
}

const Download: React.FC<PropType> = () => {
    return <div>Download</div>;
};

export default memo(Download);
