const saveAccount = (Account) => {
  localStorage.setItem("Account", Account);
};

const getAccount = () => {
  return localStorage.getItem("Account");
};

const clearAccount = () => {
  return localStorage.removeItem("Account");
};
export { saveAccount, getAccount, clearAccount };
