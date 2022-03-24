/**
 *  - Given the employee array below, write the code to determine each employee's bonus percentage
 *
 *  - For each employee, determine their bonus percentage based on these rules:
 *      - Everyone starts with a 3% base bonus percentage
 *      - If years of experience is 5 or more years, add 2%
 *      - If years of experience is over 10, add 3%
 *      - If the employee's id is four digits, they get an additional 2%
 *      - No bonus percentage can be more than 7% or less than 0%
 *
 *  - Console Log each employee's name and final bonus percentage
**/

console.log("Array Objects file loaded");

// An array of employee objects. DO NOT ALTER.
const employees = [
    { id: 9093, name: "Tony", yearsOfExperience: 10, },
    { id: 83921, name: "Carla", yearsOfExperience: 4, },
    { id: 1537, name: "Robert", yearsOfExperience: 2, },
    { id: 39313, name: "Micah", yearsOfExperience: 14, },
    { id: 09473, name: "Kat", yearsOfExperience: 8, },
    { id: 8392, name: "Nicole", yearsOfExperience: 5, },
];

// your code below

//- 3% bonus for each employees


 function getBonus (employeeList) {

   var bonus = 0

  switch (true) {
    case (employeeList.yearsOfExperience <= 0):
    bonus = .03;
    break;
//- If years of experience is 5 or more years, add 2%

    case (employeeList.yearsOfExperience >= 5):
    bonus = .05;
    break;
//- If years of experience is over 10, add 3%
    case (employeeList.yearsOfExperience >= 10):
    bonus = .06;
    break;
  }

//-  If the employee's id is four digits, they get an additional 2%
    if (employeeList.id.length >= 4) {
    bonus = bonus + .02;
    }
//- No bonus percentage can be more than 7% or less than 0%
    if (bonus > .07) {
      bonus = .07
    }

    return bonus
}


   
//- Console Log each employee's name and final bonus percentage

console.log(getBonus)
getBonus('Tony')
