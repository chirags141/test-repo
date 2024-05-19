package com.project.employee.services;

import com.project.employee.model.Employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployees(Employee employee);
    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
