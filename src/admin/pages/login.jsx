import styled from "styled-components";
import Input from "../../shared/input";


const Login = () => {
  return (
    <LoginPage>
      <LoginCard>
        <LoginTitle>건널까말까 관리자 로그인</LoginTitle>
        <LoginDescription>
          관리자 페이지에 로그인해주세요.
        </LoginDescription>
        <LoginForm>
          <div>
            <label>아이디</label>
            <Input placeholder="아이디를 입력하세요" />
          </div>

          <div>
            <label>비밀번호</label>
            <Input placeholder="비밀번호를 입력하세요" />
          </div>

          <button>로그인</button>
        </LoginForm>
      </LoginCard>
    </LoginPage>
  )
}

const LoginPage = styled.main`
  min-height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;
  padding: 32px;
`;

const LoginCard = styled.section`
  width: 100%;
  max-width: 420px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 32px;
`;

const LoginTitle = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
`;

const LoginDescription = styled.p`
  margin-bottom: 24px;
  color: #555;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    height: 48px;
    border: 0;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default Login;