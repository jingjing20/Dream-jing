const User = function(){
  let _password;
  class User {
    constructor(username,password) {
      this.username = username;
      _password= password;
    }

    login() {
      console.log(this.username, _password);
      return 'baobei';
    }
  }
  return User;
}();

const user = new User('jingjing','haohao');

console.log(user.username);
console.log(user.password);
console.log(user._password);
console.log(user);