render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    )
}

render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            {isLoggedIn ? (
                <LogoutButton onClick={this.handleLogoutClick} />
            ) : (
                <LoginButton onClick={this.handleLoginClick} />
            )}
        </div>
    )
}