import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import logo from '../../assets/mindx-logo1.png';
import './styles.scss';

const Header = () => {
    return (
        <div className="page-header">
            <div className="logo">
                <img src={logo} />
            </div>
            <ul className="list-router-page">
                <li>
                    <NavLink to={'/home'}>
                        Trang chủ
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/personal'}>
                        Cá nhân
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/account'}>
                        Tài khoản
                    </NavLink>
                </li>
            </ul>
            <Button>
                Đăng xuất
            </Button>
        </div>
    )
}

export default Header;