// all React components must act like pure functions with respect to their props.

// PURE
function sum(a, b) {
    return a + b
}

// IMPURE
function withdraw(account, amount) {
    account.total -= amount
}