const users = []

function User(id, name, email, password, date, admin) {
  this.id = id
  this.name = name;
  this.email = email;
  this.password = password;
  this.createdAt = date;
  this.admin = admin
}

const handleUser = {
  create: function(id, name, email, password, date, admin){
    let newUser = new User(id, name, email, password, date, admin);
    users.push(newUser);
    console.log(users)
    return newUser;
  },

  findAll: function(){
    return users;
  }
}



module.exports = handleUser;