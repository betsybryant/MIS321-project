using Api.Models;
using api.Interfaces.EmployeeInterfaces;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace Api.Database
{
    public class EmployeeUtil : IReadEmployee
    {
        public void Create(Employee employee)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();  

            string stm = @"INSERT INTO employees(empID, empEmail, empFName, empLName, empPassword) VALUES(@empID, @empEmail, @empFName, @empLName, @empPassword)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@empID", employee.EmpId);
            cmd.Parameters.AddWithValue("@empEmail", employee.EmpEmail);
            cmd.Parameters.AddWithValue("@empFName", employee.EmpFName);
            cmd.Parameters.AddWithValue("@empLName", employee.EmpLName);
            cmd.Parameters.AddWithValue("@empPassword", employee.EmpPassword);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        public List<Employee> GetAll()
        {
            List<Employee> myEmployee = new List<Employee>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT * from employees";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader read = cmd.ExecuteReader();
            while(read.Read())
            {
                myEmployee.Add(new Employee(){
                    EmpId = read.GetInt32(0),
                    EmpEmail = read.GetString(1),
                    EmpFName = read.GetString(2),
                    EmpLName = read.GetString(3),
                    EmpPassword = read.GetString(4),
                });
            }
            return myEmployee;
        }
    }
}