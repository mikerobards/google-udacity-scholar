/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  var str = "";
  for (var i = 1; i <= num; i++) {
    str += "ha";
  }
  str += "!";
  return str;
}

console.log(laugh(10));