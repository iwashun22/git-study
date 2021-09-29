
const { sayHi, person} = require('./module');
sayHi(person.name);

//function makeClass(){
   class Temperature {
      constructor(temp){
         this._temp = temp;
      }
      get temperature(){
         return this._temp;
      }
      set temperature(update){
         this._temp = update;
      }
   }  
   //return Temperature;
//}

//const temp = makeClass();
//const here = new temp(28);

const here = new Temperature(28);

here.temperature = 39;

console.log(here.temperature);

/////////////////////

const fs = require('fs');

fs.writeFile(
   './text/first.txt', 
   'Hello this is first text file',
   'utf8',
   (err, resolve) => {
      if(err) return err;
      console.log('The file have saved: ./text/first.txt');
   }
)

fs.writeFile(
   './text/second.txt', 
   'Hello this is second text file',
   'utf8',
   (err, resolve) => {
      if(err) return err;
      console.log('The file have saved: ./text/second.txt');
   }
)