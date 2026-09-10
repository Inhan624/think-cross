import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Sidebar>
      <SidebarNav>
        <p>건널까말까</p>
        <NavLink to="/admin">대시보드</NavLink>
        <NavLink to="/state">상태</NavLink>
        <NavLink to="/event">이벤트 로그</NavLink>
        <NavLink to="/inquiry">문의 사항</NavLink>
        <NavLink to="/login" className="logout">로그아웃</NavLink>
      </SidebarNav>
    </Sidebar>
  );
};

export default Nav;

const Sidebar = styled.aside`
  min-height: 100vh;
  width: 220px;
  background: white;
  border-right: 1px solid #ddd;
  padding: 16px 16px;

  // 로그아웃을 맨 밑으로 보내기 위한 노력
  display: flex;
  flex-direction: column; // 세로방향으로~
`;

const SidebarNav = styled.nav`
  // 꽉채우기
  height: 100%;

  flex: 1; // 로그아웃과 그. ㅚ. 으ㅣ 것들 사이의 공간을 만들어 주기 위한 여백코드~
  display: flex;
  flex-direction: column;

  p {
    margin: 15px 0px;
    font-size: 25px;
    font-weight: 700;
    padding-left: 16px;
  }

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

  a.logout {
    margin-top: auto;
    margin-bottom: 0;
    color: red;
    background-color: #ffeeee;
  }
  a.logout:hover {
    background-color: #ffc7c7;
  }
`;
