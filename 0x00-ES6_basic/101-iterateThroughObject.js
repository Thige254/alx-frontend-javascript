export default function iterateThroughObject(reportWithIterator) {
    let employeesString = '';
  
    for (const department in reportWithIterator.allEmployees) {
      employeesString += reportWithIterator.allEmployees[department].join(' | ') + ' | ';
    }
  
    employeesString = employeesString.slice(0, -3);
  
    return employeesString;
  }
