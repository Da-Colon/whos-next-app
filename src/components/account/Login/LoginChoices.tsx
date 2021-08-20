const LoginChoices = () => {
  return (
    <div className="login-choices">
      <div>
        <button>Login with Email</button>
      </div>
      <div>
        <button disabled={true}>Login with Web3</button>
      </div>
    </div>
  )
}

export default LoginChoices