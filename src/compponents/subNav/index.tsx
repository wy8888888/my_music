import React, { ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/store';
import { getSubNavModule } from '@/store/action/nav';
import header from '@/assets/data/header.json';

interface PropType {
    children?: ReactNode;
}

interface NavList {
    name: string;
    url: string;
    module: string;
}
const SubNav: React.FC<PropType> = () => {
    const subNavs: NavList[] = header.subNavList;
    const { subNavModule } = useAppSelector((state) => state.nav);
    const dispatch = useAppDispatch();
    const clickSubNav = (module: string) => {
        dispatch(getSubNavModule(module));
    };
    return (
        <div className="m-sub-nav">
            <div className="wrap">
                <nav className="nav">
                    {subNavs.map((item) => {
                        return (
                            <Link
                                className={`${
                                    subNavModule == item.module ? 'active' : ''
                                }`}
                                key={item.module}
                                to={item.url}
                                onClick={() => clickSubNav(item.module)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default memo(SubNav);
