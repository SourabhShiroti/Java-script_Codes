//Some methods of array in javascript
let fruits=["Apple","Banana","Grapes","Orange","Papaya"];
fruits.push("Litchi","Pears","Watermelon");
console.log(fruits);
console.log(fruits.length);

let veg=["Potato","Tomato","Peas","Lady-finger","Cabbage"];
veg.pop();
console.log(veg);
console.log(veg.length);
console.log(typeof veg);

let book1=["Physics","chemistry","Maths"];
let book2=["English","Hindi","Sanskrit"];
let subject = book1.concat(book2);
console.log(subject);

let Balls=["Tennis","Football","Cricket-ball","Golf","Jumper"];
Balls.unshift("Basketball");
console.log(Balls);

let Ball=["Tennis","Football","Cricket-ball","Golf","Jumper"];
Ball.shift();
console.log(Ball);