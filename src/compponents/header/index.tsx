import React, { ReactNode, memo, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/store';
import { getNavModule } from '@/store/action/nav';
import header from '@/assets/data/header.json';

interface PropType {
    children?: ReactNode;
}

interface NavList {
    name: string;
    url: string;
    module: string;
}

const Header: React.FC<PropType> = () => {
    const [flag, setFlag] = useState(false);
    const navlist: NavList[] = header.navList;
    const inputRef = useRef<any>(null);
    const focusSearchInput = () => {
        setFlag(true);
        inputRef.current.focus();
    };
    const { navModule } = useAppSelector((state) => state.nav);
    const dispatch = useAppDispatch();
    const clickNavModule = (module: string) => {
        dispatch(getNavModule(module));
    };
    return (
        <>
            <header className="top-bar">
                <div className="m-top">
                    <div className="wrap clear-fix">
                        <h1 className="logo topbar">
                            <a href="#"></a>
                        </h1>
                        <nav className="m-nav">
                            {navlist.map((item) => {
                                return (
                                    <Link
                                        key={item.module}
                                        to={item.url}
                                        className={`${
                                            navModule == item.module
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            clickNavModule(item.module)
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="m-tophead ">
                            <a className="link">登录</a>
                        </div>
                        <a className="m-create-center">创作者中心</a>
                        <div className="m-search-box topbar">
                            <div className="button-box">
                                <input
                                    className="search-input"
                                    onBlur={() => setFlag(false)}
                                    ref={inputRef}
                                />
                                <span
                                    className="text"
                                    style={{ display: flag ? 'none' : '' }}
                                    onClick={focusSearchInput}
                                >
                                    音乐/视频/电台/用户
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className="m-sub-nav-top"
                style={{ display: navModule == 'discover' ? 'none' : '' }}
            ></div>
        </>
    );
};

export default memo(Header);
