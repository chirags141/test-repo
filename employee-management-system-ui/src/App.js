// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<EmployeeList />}></Route>
        <Route path='/' element={<EmployeeList />}></Route>
        <Route path='/employeeList' element={<EmployeeList />}></Route>
        <Route path='/addEmployee' element={<AddEmployee />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
