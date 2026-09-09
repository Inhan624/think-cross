import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <Sidebar>
            <SidebarNav>
                <NavLink to="/admin">대시보드</NavLink>
                <NavLink to="/sensor">센서 상태</NavLink>
                <NavLink to="/led">LED 상태</NavLink>
                <NavLink to="/event">이벤트 로그</NavLink>
                <NavLink to="/locate">설치 위치</NavLink>
                <NavLink to="/inquiry">문의 사항</NavLink>
                <NavLink to="/login">로그아웃</NavLink>
            </SidebarNav>
        </Sidebar>
    );
};

export default Nav;

const Sidebar = styled.aside`
    width: 220px;
    background: white;
    border-right: 1px solid #ddd;
    padding: 24px 16px;
`;

const SidebarNav = styled.nav`
    a {
        display: block;
        padding: 12px 16px;
        color: #555;
        border-radius: 8px;
        margin-bottom: 4px;
    }
    a:hover {
        background: #f1f1f1;
    }
    a.active {
        background: #eff6ff;
        color: #2563eb;
        font-weight: bold;
    }
`;
