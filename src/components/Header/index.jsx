import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import logo from '../../assets/mindx-logo1.png';
import './styles.scss';

const Header = () => {
    const navigate = useNavigate();
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
            <Button onClick={() => {
                navigate('/auth/login');
            }}>
                Đăng xuất
            </Button>
        </div>
    )
}

export default Header;