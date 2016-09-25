// Controller for the Rewards page
Main.controller('RewardsCtrl', ['rewardsPromise', function (rewardsPromise) {
  this.test = "Hello World!";
  this.rewards = rewardsPromise.data;
}])