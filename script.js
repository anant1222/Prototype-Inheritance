console.log('Hello Anant')

function employe(name,salary, experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;

}
 employe.prototype.slogon=function(){
     return `This is a best company i have seen.regerd, ${this.name}`;
 }
 let anant= new employe('Anant yadav', 3500000,5);

//  Inheritance


 function programmer(name,salary,experience,language){
     employe.call(this,name, salary,experience);
     this.language= language;

 }
  let vikash =new programmer('Anant Yadav',3500000,5,"JavaScript")
  console.log(vikash);
  
