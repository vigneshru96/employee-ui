import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees!: Employee[];

  constructor(private employService: EmployeeService) {}

  ngOnInit() {
    // this.employees = [
    //   {
    //     id: 1,
    //     firstName: 'Sachin',
    //     lastName: 'Tendulkar',
    //     emailId: 'sachin@com',
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Rahul',
    //     lastName: 'Dravid',
    //     emailId: 'rahul@com',
    //   },
    //   {
    //     id: 3,
    //     firstName: 'Sourav',
    //     lastName: 'Ganguly',
    //     emailId: 'ganguly@com',
    //   },
    // ];

    this.getEmployees();
  }

  private getEmployees() {
    this.employService.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }
}
