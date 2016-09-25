// Controller for the Rewards page
Main.controller('RewardsCtrl', ['rewardsPromise', 'rewardsFactory', function (rewardsPromise, rewardsFactory) {
  this.test = "Hello World!";
  this.rewards = rewardsPromise.data;
  this.chooseReward = rewardsFactory.chooseReward;
  this.points = rewardsFactory.points || 0;
}])