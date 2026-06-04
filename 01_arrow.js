// var a = 10 ;



// const func = () =>{
//     var a=20;
//     console.log(a);
//     console.log("Hello World");
// }
// func();
// console.log(a);



// for (var i = 0; i < 3; i++) {
//     var k=i;
//     setTimeout(() => console.log(k), 100);
//   }
//   // Output: 3, 3, 3
  
//   for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 100);
//   }
  // Output: 0, 1, 2



  // const person = {
  //   name: "John",
  //   sayHi: function() {
  //       console.log(this.name);
  //       const fun = ()=>{
  //           console.log(this.name);
  //       }
  //       fun();

  //   }
  // };


  // person.sayHi();

// function Timer() {
//     this.seconds = 0;
  
//     setInterval(()=> {
//       this.seconds++;
//       console.log(this.seconds);
//     }, 1000);
//   }
  
//   new Timer();



// const arr = [1,2,3,4,5];

// const result = arr.map((ele, idx, arr)=>arr);
// console.log(result);

// //reduce me dalte ha initial value



// const user = {name:"John",age:20};

// const {name,age} = user;
// console.log(name,age);

// const arr = [1,2,3];
// const [a,b,,,c="default"] = arr;
// console.log(a,b,c);

// const arr = [1,2,3];
// function print(b,...a){
//     console.log(a);
// }
// print(...arr);


// const a = [1,2,3];
// const b = [4,5,6];
// const c = [...b,...a];
// console.log(c);

// const flag = a.reverse();
// console.log(flag);
// console.log(a);

// const str = "hello";

// const newStr = str.split("");
// newStr.reverse().join("");
// console.log(newStr);







// function tag(str, ...val) {
//   console.log(str);
//   console.log(val);
// }

// const name = "Alice";
// const age = 25;

// tag`Name: ${name}, Age: ${age}`;






//map in js
const products = [ 

  { name: 'Laptop',  price: 75000, inStock: true  }, 

  { name: 'Phone',   price: 30000, inStock: false }, 

  { name: 'Tablet',  price: 45000, inStock: true  }, 

  { name: 'Monitor', price: 20000, inStock: true  }, 

  { name: 'Keyboard',price: 5000,  inStock: false }, 

]; 

// const newArr = products.map((val,i,arr)=>{
//   return val.name;
// })

// const discountArr = products.map((val,i,arr)=>{
//   return {
//     ...val,
//     price : val.price*0.10
//   }
// })

// console.log(newArr)
// console.log(discountArr);


// const filteredArr = products.filter((val,i,arr)=>{
//   return val.price<20000;
// })
// console.log(filteredArr);

// const filterAndMap = products.filter((val)=>{
//   return val.inStock;
// }).map((val)=> val.price)

// console.log(filterAndMap);

// const mapAndFilter = products.map((val)=>{
//   return {...val, disPrice:val.price*0.1}
// }).filter((val)=>{
//   return val.disPrice<=500
// })
// console.log(mapAndFilter);



// const totalPrice = products.reduce((acc, val, i, arr)=>{
//   return acc+val.price
// },0);
// console.log(totalPrice);

// const grouping = products.reduce((acc,val,i,arr)=>{
//   const key = val.inStock ? "available" : "unavailable";

//   acc[key].push(val.name);
//   return acc;
// },{"available":[], "unavailable":[]});

// const grouping = products.reduce((acc,val,i,arr)=>{
//   const key = val.inStock ? "available" : "unavailable";
//   acc[key] = acc[key] || [];
//   acc[key].push(val.name);
//   return acc;
// },{});

// console.log(grouping);




// const findingItem = products.find((ele,i,arr)=>{
//   return ele.price == 45000
// })

// console.log(findingItem);




// const isPresent = products.some((ele,i)=>{
//   return ele.inStock
// })

// console.log(isPresent);

// const isAll = products.every((ele,i)=>{
//   console.log(ele.name);
//   return ele.inStock;
// })

// console.log(isAll);




//async function always returns a promise we must await, 
// if some func returns a promise it must be await,
// async function getPrice() {
//   return 500; 
// }

// async function getTax() {
//   return new Promise((resolve) => resolve(50));
// }

// // Consuming them
// async function calculateTotal() {
//   const price = await getPrice(); 
//   console.log(price);
//   const tax = await getTax();    
//   console.log(price + tax);      
// }

// calculateTotal();






// const fetchData = new Promise((resolve, reject) => { 
//   console.log("inside promise");
//   const success = true;  // simulate outcome 
//   if (success) { 
//     resolve({ id: 1, name: 'Arun' }); 
//   } else { 
//     reject(new Error('Something went wrong')); 
//   } 
// }); 

  
// fetchData 
//   .then(data => console.log(data)) 
//   .catch(err => console.error(err.message)); 



// const str = "abcdefghijkl";

// const newStr = str.slice(-11,-1);
// console.log(newStr);




// The fetch() API in JavaScript is a modern, built-in tool used to make asynchronous 
// network requests. It is most commonly used to send or receive data from a server or
//  an API (Application Programming Interface).

// To safely handle server errors, you must check the response.ok property, 
// which is a boolean that is true only if the HTTP status code is between 200 and 299.

// async function fetchPosts() { 
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 

//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }
//     console.log(response);
//     const posts = await response.json(); 
//     // console.log("hey hey")
//     // console.log(posts);

//     const firstFive = posts.slice(0, 5) 
//       .map(post => ({ 
//         id:    post.id, 
//         title: post.title, 
//       })); 
//     // console.table(firstFive); 
//   }catch(err){ 
//     console.error('Error:', err.message); 
//   } 
// } 
// fetchPosts(); 














// Simulating 3 different API calls with different completion speeds

// All-or-Nothing (Short-Circuiting): It requires every single promise to succeed. 
// If even one promise rejects (fails), the entire operation fails immediately, and 
// it discards the results of all the other promises—even if they were successful.

// Order Preservation: The array of results returned by Promise.all() will match the
// exact order of the array of promises you passed into it, regardless of which promise finished first.

// const fetchUser = new Promise((resolve) => {
//   console.log("hi")
//   setTimeout(() => {
//     resolve({ id: 1, name: "Alex" })
//   },1000);
// });
// console.log(fetchUser);
// const fetchOrders = new Promise((resolve) => setTimeout(() => resolve(["Order #101", "Order #102"]), 2000));
// const fetchNotifications = new Promise((resolve) => setTimeout(() => resolve(["New message!"]), 500));

// async function loadDashboard() {
//   try {
//     console.time("DashboardTimer");
    
//     // Kick them all off at once and wait for the group to finish
//     const [user, orders, notifications] = await Promise.all([
//       fetchUser, 
//       fetchOrders, 
//       fetchNotifications
//     ]);

//     console.log("User Data:", user);
//     console.log("Order History:", orders);
//     console.log("Notifications:", notifications);
    
//     console.timeEnd("DashboardTimer");
//   } catch (error) {
//     console.error("Dashboard failed to load:", error);
//   }
// }

// loadDashboard();









// No Short-Circuiting: It never rejects. It will wait out the storm until every single promise has finished executing (either resolved or rejected).

// Detailed Status Reports: It returns an array of objects. Each object represents the final outcome of a promise and 
// tells you exactly two things: what its status was, and what its value (data) or reason (error) was.





// function downloadVideo(){
//   return new Promise((resolve) => setTimeout(() => resolve("video.mp4"), 1000));
// }

// function downloadPDF(){
//   return new Promise((resolve, reject) => setTimeout(() => reject("PDF File Not Found!"), 5000));
// }

// function downloadAudio(){
//   return new Promise((resolve) => setTimeout(() => resolve("song.mp3"), 1200));
// }

// async function handleBulkDownload() {
//   console.log("Starting bulk downloads...");
  
//   // Await the settlement of all downloads
//   const [first,...second] = await Promise.allSettled([downloadVideo(), downloadPDF(), downloadAudio()]);
  
//   console.log("All tasks finished! Here is the report:");
//   console.log(first);
//   console.log(second);
// }

// handleBulkDownload();







// Promise.race() returns a promise that settles the exact millisecond the very first promise in your array settles.

// The Rule: It does not care if the first promise succeeds or fails. Whichever one is the absolute fastest wins the race and dictates the entire outcome.
// Simulating an API call that takes 5 seconds (Slow!)

// const fetchData = new Promise((resolve) => setTimeout(() => resolve("Data loaded!"), 5000));

// // A timeout promise that automatically rejects after 3 seconds
// const timeout = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Request timed out!")), 10000));

// async function watchRace() {
//   try {
//     // Whichever finishes first wins!
//     const result = await Promise.race([fetchData, timeout]);
//     console.log(result);
//   } catch (error) {
//     console.error("Race lost:", error.message); 
//     // Output: Race lost: Request timed out! (Because 3s is faster than 5s)
//   }
// }

// watchRace();
// console.log("hey")








// Promise.any() is the newest addition to the promise family. Like Promise.race(), it looks for the fastest promise. 
// However, it completely ignores failures unless everything fails.

// The Rule: It returns the value of the first promise that completes successfully (fulfills).

// What if things fail? If the fastest promise rejects, Promise.any() ignores it, leaves it behind, and waits for the 
// next fastest one to succeed. It will only reject if every single promise you passed into it fails.



// const brokenServerA = Promise.reject("Server A is down (404)");
// const slowServerB = new Promise((res) => setTimeout(() => res("Image from Server B"), 2000));
// const fastServerC = new Promise((res) => setTimeout(() => res("Image from Server C"), 500));

// async function getFastestImage() {
//   try {
//     // It ignores Server A's failure, and takes Server C because it's the fastest success
//     const image = await Promise.any([brokenServerA, slowServerB, fastServerC]);
//     console.log("Success:", image); 
//   } catch (error) {
//     console.error("All servers failed:", error);
//   }
// }

// getFastestImage(); // Output: Success: Image from Server C







// console.log("1. Sync Start");

// setTimeout(() => {
//   console.log("2. setTimeout (MacroTask)");
// }, 0);

// async function makeNetworkRequest() {
//   try {
//     console.log("hey");
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    
//     const data = await response.json();
//     console.log("3. fetch (MicroTask Data Received)");
    
//   } catch (error) {
//     console.error("Network request failed!", error);
//   }
//   console.log("good bye")
//   return Promise.resolve(10);
// }

// const res = await makeNetworkRequest();
// console.log(res);

// console.log("4. Sync End");






// const obj = {
//   vType : "car",
//   namee : "willy",
// }
// console.log(obj["namee"]); // cant use namee without ""
// console.log(obj.namee) //cant do obj."namee"


// const alien = {
//   name: "Zim",
//   planet: "Irk"
// };

// const planet = "name";

// console.log(alien.planet);   // "Irk" (Looks for literal key "planet")
// console.log(alien["planet"]); // "Irk" (Looks for literal key "planet")
// console.log(alien[planet]);   // "Zim" (Looks for the variable planet, which resolves to "name")







// const arr1 = [1,2,3,5,5];
// const arr2 = [6,7,8,9,10];

// const merge = [...arr1, ...arr2];
// const removeDuplicate = new Set(merge);
// console.log(merge);
// console.log(removeDuplicate);

// const arr = [...removeDuplicate];
// console.log(arr, typeof arr, Array.isArray(arr));








// function Highlight(Strings, ...values){
//   console.log(Strings)
//   console.log(values);

//   const upperCase = values.map((val, idx, arr)=>{
//     return val.toUpperCase();
//   })
//   console.log(upperCase);

//   const ans = Strings.reduce((acc, val, idx, str)=>{
//     const upr = upperCase[idx] || "";
//     return acc+val+upr;
//   },"")
//   return ans;
// }
// const name = 'alice';
// const role = 'software engineer';
// const company = 'google';

// // Applying the tag
// const message = Highlight`${name} Hello ${name}, congratulations on your new role as a ${role} at ${company}!`;
// console.log(message);







// const arr = [1,2,3,4,5,6,7,8,9,11,17,21,31];

// function isPrime(num){
//   if(num<=1) return false;
//   if(num==2) return true;
//   if(num%2==0) return false;
  
//   for(let i=3;i*i<=num;i+=2){
//     if(num%i==0) return false;
//   }
//   return true;
// }

// const ans = arr.filter((ele,idx,arr)=>{
//   return isPrime(ele);
// })

// console.log(ans);








// const arr = ['a','b','a','d','c','c','e'];

// const ans = arr.reduce((acc, ele, idx, arr)=>{
//   acc[ele ] = acc[ele] || 0
//   acc[ele]+=1;
//   return acc;
// },{})
// console.log(ans);







// console.log(products);
// const totalPrice = products.filter((ele, idx)=>{
//   return ele.inStock;
// }).reduce((acc,ele,idx)=>{
//   return acc+ele.price;
// },0)
// console.log(totalPrice);









// async function func(){
//   try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     if(!res.ok){
//       throw new Error(`Http status code ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(data.slice(0,5));

//     const val = data.find((ele,idx)=>{
//       return ele.id == 3;
//     })
//     const isPresent = data.some(ele => ele.address.city === 'Gwenborough');
//     console.log(isPresent);


//   }catch(error){
//     console.log("err",error);
//   }
// }
// func();











// async function func(){
//   try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if(!res.ok){
//       throw new Error(`Http status code ${res.status}`);
//     }
//     const data = await res.json();
//     const user1 = data.filter(ele => ele.userId==1);
//     console.log(user1);


//   }catch(error){
//     console.log("err",error);
//   }
// }
// func();







// function findUser(data, id){
//   return new Promise((resolve,reject)=>{
//     try{
//       const ans = data.find(val => val.id == id);
//       resolve(ans);
//     }catch(err){
//       console.log("error occured", err);
//     }
//   })
// }

// async function func(){
//   try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     if(!res.ok){
//       throw new Error(`Http status code ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(data.slice(0,5));

//     const pr1 = findUser(data, 1);
//     const pr2 = findUser(data, 2);
//     const pr3 = findUser(data, 3);

//     const [user1,user2,user3] = await Promise.all([pr1,pr2,pr3]);
//     console.log("name: "+user1.name, "company name: "+ user1.company.name);
//     console.log("name: "+user2.name, "company name: "+ user2.company.name);
//     console.log("name: "+user3.name, "company name: "+ user3.company.name);
//   }catch(error){
//     console.log("err",error);
//   }
// }
// func();








// async function func(){

//     let cnt=3;
//     let res;
//     while(cnt--){
//       try{
//         res = await fetch("https://jsonplaceholder.typicode.com/userss");
//         if(res.ok) break;
//         console.log("retrying")
//       }catch(error){
//         console.log("retrying")
//       }
//     }
//     try{
//       if(!res.ok){
//         throw new Error("Fails after 3 attempts");
//       }
//       const data = await res.json();
//       console.log(data.slice(0,5));  
//     }catch(err){
//       console.log("error occured ",err.message);
//     } 
// }

// func();















async function func() {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const itemsPerPage = 5;
  let allData = [];

  try {
    for (let page = 1; page <= 5; page++) {
      console.log(`Fetching page ${page}...`);

      const url = `${baseUrl}?_page=${page}&_limit=${itemsPerPage}`;
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch page ${page}. Status: ${response.status}`);
      }

      const pageData = await response.json();
      
      allData.push(pageData);
    }

    
    console.log(allData);

  } catch (error) {
    console.error("Pagination stopped due to an error:", error);
  }
}

func();