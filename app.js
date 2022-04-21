// 1-
// const amount = 5
// if(amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }
// console.log(`hey, it's my first`);

// //2-
// console.log(__dirname)
// console.log(__filename)
// setInterval(()=>{
//     console.log('hello world');
// }, 1000)    //1000 ms shows msg

// //3- Modules
// // CommonJS, every file is module (by default)
// // Modules - Encapsulated Code (only share minimum)

// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log(`Hello there ${name}`);
// }
// sayHi('heny')
// sayHi(john)
// sayHi(peter)

// //4- import
// const names = require('./1-names')
// const sayHi = require('./2-utilities')
// // console.log(names);
// sayHi(names.john)
// sayHi(names.peter)

// // 5
// const data = require('./2-utilities')
// console.log(data);

// //6
// require('./1-names')


// // 7- OS Modules(operating system)
// const os = require('os')
// //info about current user
// const user = os.userInfo()
// console.log(user);

// //method return the system uptime in seconds (running system)
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

// // 8-  Path
// const path = require('path')
// console.log(path.sep)
// const filePath = path.join('/file','subfolder','text.txt')
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname,'file','subfolder','text.txt')
// console.log(absolute);

// //9 Sync 
// // //first using way:
// // const {readFileSync} = require('fs')
// // const fs = require('fs')
// // fs.writeFileSync
// //first using way:
// const {readFileSync, writeFileSync} = require('fs')
// console.log('start step one');
// const first = readFileSync('./file/first.txt','utf8')
// const second = readFileSync('./file/second.txt','utf8')

// writeFileSync('./file/result.txt'
//                 ,`Hello is the result \n => ${first} \n => ${second}`
//                 ,{flag:'a'}) // flag add to previuse file
// console.log('done step one');
// console.log('star step two');

// // // 10- Fsync
// const {readFile, writeFile} = require('fs')

// console.log('Start');
// readFile('./file/first.txt','utf8',(err, result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     // console.log(result);
// const first = result

// readFile('./file/second.txt','utf8',(err, result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// const second = result

// writeFile('./file/result.txt',
//           `Here is the result:\n >>> ${first} \n >>> ${second}`,
//           (err, result)=>{
//             if(err){
//                 console.log(err);
//                 return
//             }
//         console.log('Done')
//           })
//     })
// })
// console.log('Start next step');


// // 12 -
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('Hello Heny')
//     }
//     else if(req.url === '/about'){
//         res.end('About Heny')
//     }
//     else{
//         res.end(`
//         <h1>Oops!</h1>
//         <p>I can't find page</p>
//         <a href="/">Back Home</a>
//         `)
//     }
// })

// server.listen(8000)

// 13 -npm
const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)