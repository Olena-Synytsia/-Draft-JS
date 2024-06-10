const profile = {
  users: {
    Jacob: {
      playTime: 300,
      amount: 300,
    },
  },

  changeUsername(oldName, newName) {
    this.users[newName] = { ...this.users[oldName] };
    delete this.users[oldName];
  },

  updatePlayTime(username, hours) {
    this.users[username].playTime += hours;
    this.users[username].amount = this.users[username].playTime;
  },

  getInfo(username) {
    const user = this.users[username];
    return `${username} has ${user.amount} active hours!`;
  },
};

console.log(profile.getInfo("Jacob")); // Output: "Jacob has 300 active hours!"

profile.changeUsername("Jacob", "Marco");
console.log(profile.getInfo("Marco")); // Output: "Marco has 300 active hours!"

profile.updatePlayTime("Marco", 20);
console.log(profile.getInfo("Marco")); // Output: "Marco has 320 active hours!"

profile.changeUsername("Marco", "Вася");
profile.updatePlayTime("Вася", 115);
console.log(profile.getInfo("Вася")); // Output: "Вася has 415 active hours!"

profile.changeUsername("Вася", "Коля");
profile.updatePlayTime("Коля", 100);
console.log(profile.getInfo("Коля"));
