// 1. Write a JavaScript program to display the values (i.e. display book name, author name and reading status) of the following books. If the reading status  is true 

var library1 = [  
   { 
       author: 'Bill Gates', 
       title: 'The Road Ahead', 
       readingStatus: true 
   }, 
   { 
       author: 'Steve Jobs', 
       title: 'Walter Isaacson', 
       readingStatus: true 
   }, 
   { 
       author: 'Suzanne Collins', 
       title:  'Mockingjay: The Final Book of The Hunger Games',  
       readingStatus: false 
   }];
   
  
  let c1 = library1.filter(function(ele){
	  return ele.readingStatus == true;
  })
  
  console.log(c1);
  
  
  
  
  // 2. Write a code to replace the value 6 in the following object with 606,  

let obj = { 

foo: { a: "hello", b: "world" }, 

bar: ["example", "mem", null, { xyz: 6 }, 88], 

qux: [4, 8, 12] 

}; 

obj.bar[3].xyz=606;

console.log(obj);
///////////////////////////////////////////////////////////////////////////////////

// 3.
const users = [ 

  { 

    first_name: 'Mike', 

    last_name: 'Sheridan' 

  }, 

  { 

    first_name: 'Tim', 

    last_name: 'Lee' 

  }, 

  { 

    first_name: 'John', 

    last_name: 'Carte' 

  } 

]; 

let c2 = users.map((ele)=>{
	return ele.first_name+ele.last_name;
})
console.log(c2)

// Using Map method 

// output:['Mike Sheridan', 'Tim Lee', 'John Carte'] 

///////////////////////////////////////////////////////////////////////////////////

// 4.

const users2 = [ 

  { 

    first_name: 'Mike', 

    last_name: 'Sheridan', 

    age: 30 

  }, 

  { 

    first_name: 'Tim', 

    last_name: 'Lee', 

    age: 45 

  }, 

  { 

    first_name: 'John', 

    last_name: 'Carte', 

    age: 25 

  } 

]; 


let c21 = users2.map((ele)=>{
	return ele.last_name;
})
console.log(c21)


// Using Map method 

// Output:["Sheridan", "Lee", "Carte"] 

/////////////////////////////////////////////////////////////////////////////////////

// 5.

const users3 = [ 

  { 

    first_name: 'Mike', 

    location: 'London' 

  }, 

  { 

    first_name: 'Tim', 

    location: 'US' 

  }, 

  { 

    first_name: 'John', 

    location: 'Australia' 

  } 

]; 

let c3 = users3.map((ele)=>{
	return `${ele.first_name} lives in ${ele.location}`
})

console.log(c3);
// Using Map method 

// ["Mike lives in London", "Tim lives in US", "John lives in Australia"] 

////////////////////////////////////////////////////////////////////////////////////

// 6.

const employees = [ 

  { name: 'David Carlson', age: 30 }, 

  { name: 'John Cena', age: 34 }, 

  { name: 'Mike Sheridan', age: 25 }, 

  { name: 'John Carte', age: 50 } 

]; 

let c4 = employees.filter((ele)=>{return ele.age > 30})
console.log(c4);

// Using filter method 

// Output:[ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }] 


// Using Filter Method: 

  ////////////////////////////////////////////////////////////////////////////////////
  

// 7.


const students = [ 

  { name: 'Quincy', grade: 96 }, 

  { name: 'Jason', grade: 84 }, 

  { name: 'Alexis', grade: 100 }, 

  { name: 'Sam', grade: 65 }, 

  { name: 'Katie', grade: 90 } 

]; 

  let c5 = students.filter((ele)=> {return ele.grade >=90})
  console.log(c5)

// Output:[ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 

////////////////////////////////////////////////////////////////////////////////////





// 8. Using Filter Method: 

  

let users6 = [ 

    { name: 'John', age: 25, occupation: 'gardener' }, 

    { name: 'Lenny', age: 51, occupation: 'programmer' }, 

    { name: 'Andrew', age: 43, occupation: 'teacher' }, 

    { name: 'Peter', age: 81, occupation: 'teacher' }, 

    { name: 'Anna', age: 47, occupation: 'programmer' }, 

    { name: 'Albert', age: 76, occupation: 'programmer' }, 

] 

  let c6 = users6.filter((ele)=> {return ele.occupation == "programmer"})
  console.log(c6)


// Output:[ { name: 'Lenny', age: 51, occupation: 'programmer' }, { name: 'Anna', age: 47, occupation: 'programmer' }, 

    // { name: 'Albert', age: 76, occupation: 'programmer' },] 

 
 