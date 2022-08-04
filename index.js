// Write your solution in this file!

var employee = {
  "name": "sam",
  "streetAdress": "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
  const newObject = {...employee}; 
  newObject[key] =value;
  return(newObject);
}
updateEmployeeWithKeyAndValue();
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
   return (employee);
}
function deleteFromEmployeeByKey(employee, key){
  let newObject;
  newObject = {...employee};
  delete (newObject[key]);
  return newObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete (employee[key]);
  return(employee);
}