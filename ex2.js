function getActiveUsers(users) {
  return users.filter((user) => user.age > 25 && user.isStatus === true);
}

function sortUsersByAge(users) {
  return users.slice().sort((a, b) => a.age - b.age);
}