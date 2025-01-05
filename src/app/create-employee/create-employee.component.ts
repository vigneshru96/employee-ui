import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.employee);
  }
}
