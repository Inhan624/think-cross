const Login = () => {
    return (
        <LoginPage>
            <LoginCard>
                <LoginTitle>건널까말까 관리자 로그인</LoginTitle>

                <LoginDescription>
                    관리자 페이지에 로그인해주세요.
                </LoginDescription>
            </LoginCard>

            <LoginForm>
                <div>
                    <label>아이디</label>
                    <Input />
                </div>

                <div>
                    <label>비밀번호</label>
                    <Input />
                </div>

                <button>로그인</button>
            </LoginForm>
        </LoginPage>
    )
}

export default Login;