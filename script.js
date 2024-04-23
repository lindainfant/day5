

//for the given JSON iterate over all for loops
//for in loop
var myresume = {
  "Name":"linda pearl",
  "Age":35,
  "Degree":"BCA",
  "Address":"Thoothukudi",
  "Number":"9600304509",
  };
  
  for (var i in myresume){
  console.log(i,myresume[i]);
  }

  //2nd loop
  //for loop
  var mydetails = [{
  "Name":"linda pearl",
  "Age":35,
  "Degree":"BCA",
  "Address":"Thoothukudi",
  "number":"9600304509",

  
  }]
  for(var i=0;i<mydetails.length;i++){
      console.log(mydetails[i]);
      
  }
  
  
  //3rd for of loop:
  
  const result= [10,20,30,40,50]
  for(var newresult of result){
      console.log(newresult);
  }
  
  //4th for each loop
  var result1 = [100,101,102,103,104,105]
  result1.forEach(numbers=>{console.log(numbers)});
  
  
  //RESUME in JSON format
  const myResume={
      "basics": {
          "name": "linda pearl",
          "email": "lindapearlp1989@gmail.com",
          "phone": 9600304509,
          "degree": "BCA",
          "location": {
            "address": "44, panimaya nagar, Thoothukudi",
            "postalCode": 628001,
            "city": "Thoothukudi",
            "state": "Tamilnadu",
            "country": "India"
          },
          
        },
        
        "education": [
          {
            "institution": "Amity University",
            "department": "BCA",
            "studyType": "Online",
            "batch start year": 2024,
            "batch end year": 2027,
            
          }
        ],
        "skills": [
          {
            "name": "MERN Developer",
            "level": "beginer",
            
          }
        ],
        "languages known": [
          {
            "language": "Tamil,English",
          }
        ],
        "interests": [
          {
            "name": "Art and craft, dancing",
          }
        ]
      }
      console.log(myResume);
  
  