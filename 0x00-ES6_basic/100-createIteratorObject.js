export default function createIteratorObject(report) {
    function* iterateEmployees() {
      for (const department in report) {
        const employees = report[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    }
  
    return iterateEmployees();
  }
