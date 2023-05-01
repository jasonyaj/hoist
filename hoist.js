// 1
console.log(hello);
var hello = "world";
// HOIST
// var hello;
// log hello as undefined;
// hello = "world";


// 2
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// HOIST
// var needle;
// function test(){
//   var needle;
//   needle = "magnet";
//   log magnet;
// }
// test():
// needle="haystack";


// 3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// HOIST
// var brendan;
// function print() {
//   brendan = "only okay";
//   log only okay;
// }
// brendan = "super cool";
// log super cool


// 4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// HOIST
// var food;
// function eat() {
//   var food;
//   food = "half-chicken";
//   log half-chicken;
//   food = gone;
// }
// food = chicken;
// log chicken;
// call function eat();
//   log half-chicken;


// 5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
// HOIST
// var mean;
// run mean(); //nothing happens


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// HOIST
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     log rock;
//     genre = "r&b";
//     log r&b;
// }
// log genre //undefined
// genre = "disco"
// call function rewind();
//   log rock;
//   log r&b;
// log disco;


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// HOIST
// function learn() {
//   var dojo;
//   dojo = "seattle";
//   log seattle;
//   dojo = "burbank";
//   log burbank;
// }
// dojo = "san jose";
// log san jose;
// call function learn;
//   log seattle;
//   log burbank;
// log san jose;


// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
// HOIST
// function makeDojo(name, students) {
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if (dojo.students > 50) {
//     dojo.hiring = true;
//   } else if (dojo.students <= 0) {
//     dojo = "closed for now";
//   }
//   return dojo;
// }
// function makeDojo(Chicago, 65) {
//   const dojo = {};
//   dojo.name = 'Chicago';
//   dojo = {name:'Chicago'}
//   dojo.students = 65;
//   dojo = {name:'Chicago', student:65}
//   dojo.hiring = true;
//   dojo = {name:'Chicago', student:65, hiring:true}
//   return {name:'Chicago', student:65, hiring:true}
// }
// function makeDojo(Berkeley, 0) {
//   const dojo = {};
//   dojo = "closed for now"; //returns error because const dojo is already an object and can not be reassigned to a string.