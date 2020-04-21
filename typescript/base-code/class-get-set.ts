let password = 'jing';
class Employee {
  private _fullname: string;
  get Name(): string {
    return this._fullname
  }
  set Name(newName) {
    if (password && password === 'jing') {
      this._fullname = newName
    } else {
      console.log('error')
    }
  }
}

//编译后js
// let employee = new Employee()
// employee.Name = 'haohao'
// if (employee.Name) {
//   console.log(employee.Name)
// }

// var password = 'jing';
// var Employee = /** @class */ (function () {
//     function Employee() {
//     }
//     Object.defineProperty(Employee.prototype, "Name", {
//         get: function () {
//             return this._fullname;
//         },
//         set: function (newName) {
//             if (password && password === 'jing') {
//                 this._fullname = newName;
//             }
//             else {
//                 console.log('error');
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//     return Employee;
// }());
// var employee = new Employee();
// employee.Name = 'haohao';
// if (employee.Name) {
//     console.log(employee.Name);
// }
