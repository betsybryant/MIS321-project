using System.Net.Mime;
using Api.Models;
using Api.Interfaces.OrderInterfaces;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace Api.Database
{
    public class OrderUtil : ICreateOrder, IUpdateOrder, IReadOrder
    {
        public void Create(Order order)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();  

            string stm = @"INSERT INTO orders(orderId, custId, orderRecordDate, orderProduct, orderTotal, completed) 
                VALUES(@orderId, @custId, @orderRecordDate, @orderProduct, @orderTotal, @completed)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@orderId", order.OrderId);
            cmd.Parameters.AddWithValue("@custId", order.CustId);
            cmd.Parameters.AddWithValue("@orderRecordDate", order.OrderRecordDate);
            cmd.Parameters.AddWithValue("@orderProduct", order.OrderProduct);
            cmd.Parameters.AddWithValue("@orderTotal", order.OrderTotal);
            cmd.Parameters.AddWithValue("@completed", order.Completed);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }

        public List<Order> GetAll()
        {
            List<Order> myOrder = new List<Order>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT * from orders";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader read = cmd.ExecuteReader();
            while(read.Read())
            {
                myOrder.Add(new Order(){
                    OrderId = read.GetInt32(0),
                    CustId = read.GetInt32(1),
                    OrderRecordDate = read.GetDateTime(2),
                    OrderProduct = read.GetString(3),
                    OrderTotal = read.GetDouble(4),
                    Completed = read.GetInt32(5)
                });
            }
            return myOrder;
        }

        // public Customer GetOne(int id)
        // {
        //     throw new System.NotImplementedException();
        // }

        public void Update(int id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();
            
            string stm = @"UPDATE orders SET completed = 1 WHERE orderId = @orderId";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@orderId", id);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}