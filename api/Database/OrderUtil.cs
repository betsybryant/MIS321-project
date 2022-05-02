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

            string stm = @"INSERT INTO orders(orderId, orderRecordDate, orderCompleteDate, orderProduct, orderTotal) 
                VALUES(@orderId, @orderRecordDate, @orderCompleteDate, @orderProduct, @orderTotal)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@orderId", order.OrderId);
            cmd.Parameters.AddWithValue("@orderRecordDate", order.OrderRecordDate);
            cmd.Parameters.AddWithValue("@orderCompleteDate", order.OrderCompleteDate);
            cmd.Parameters.AddWithValue("@orderProduct", order.OrderProduct);
            cmd.Parameters.AddWithValue("@orderTotal", order.OrderTotal);
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
                    OrderRecordDate = read.GetDateTime(1),
                    OrderCompleteDate = read.GetDateTime(2),
                    OrderProduct = read.GetString(3),
                    OrderTotal = read.GetDouble(4),
                });
            }
            return myOrder;
        }

        // public Customer GetOne(int id)
        // {
        //     throw new System.NotImplementedException();
        // }

        public void Update(Order order)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();
            
            string stm = @"UPDATE orders SET OrderCompleteDate = @OrderCompleteDate WHERE orderId = @orderId";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@orderId", order.OrderId);
            cmd.Parameters.AddWithValue("@orderCompleteDate", order.OrderCompleteDate);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}