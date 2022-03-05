module.exports.items_array = ['item1','item2'];
const person = {
    name:'low key'
}
//another way to define variable that are going to be exported 
//module.exports.single_person = person;
//console.log(module);

//accessin the built in functions in node js 
const operating_system = require('os');

//information about the current user 

//const user_information = operating_system.userInfo();
//console.log(user_information);
// check how long the machine has been running 

//console.log(`this system has been running for ${operating_system.uptime()} in seconds`);
/*
const current_system = {
    machine_name:operating_system.type(),
    total_memory:operating_system.totalmem(),
    free_memory:operating_system.freemem()
}

console.log(current_system);
//this gives us info about the current operating system
*/

const path = require('path');
//this logs what is the separator in the path
//console.log(path.sep);

//this joins and forms a filepath
 const file_path =path.join('\sample_folder','subfolder','2nd.txt')

//this gives the base file of the path

//const base_name = path.basename(file_path);
//console.log(base_name);


//running an absolute path
const absolute_path = path.resolve(__dirname,'\sample_folder','subfolder','justText.txt');
console.log(absolute_path);

///the file system built in modules 

const file_system = require('fs');
  //reading the value of a file or decoding a file 
const written_text = file_system.readFileSync(file_path,'utf-8');
//console.log(written_text);


//file_system.writeFileSync('./sample_folder/2nd_subfolder/2nd.txt','simply the text must be changed',{flag:'a'});


const new_text = file_system.readFileSync('./sample_folder/2nd_subfolder/2nd.txt','utf-8');
//console.log(new_text);

//if it is not sychronous
//this simply uses call back methods


file_system.readFile('./sample_folder/2nd_subfolder/2nd.txt','utf-8',(err,data)=>{
   if(err){
     console.log('an error occured');
   }
  const first_textFile = data;

  file_system.readFile('./sample_folder/subfolder/justText.txt','utf-8',(err,result2)=>{
    if(err){
      console.log('an error occured');
    }
   const second_textFile = result2;

   file_system.writeFile('./sample_folder/subfolder/result.txt',`this is the result of the reading ${first_textFile},${second_textFile}`,(err,final_result)=>{
     if(err){
       console.log('an  error has just occured');
     }
     console.log('the write was successfull');
   });
  })
 });


 