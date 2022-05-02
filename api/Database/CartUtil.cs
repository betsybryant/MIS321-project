using Api.Models;
using api.Interfaces.CartInterfaces;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace Api.Database
{
    public class CartUtil : ICreateCart, IReadCart
    {
        public void Create(Cart cart)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO carts(cartId, custId, productId, productName, productCategory, productImage, productPrice, quantity) VALUES(@cartId, @custId, @productId, @productName, @productCategory, @productImage, @productPrice, @quantity)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@cartId", cart.CartId);
            cmd.Parameters.AddWithValue("@custId", cart.CustId);
            cmd.Parameters.AddWithValue("@productId", cart.ProductId);
            cmd.Parameters.AddWithValue("@productName", cart.ProductName);
            cmd.Parameters.AddWithValue("@productCategory", cart.ProductCategory);
            cmd.Parameters.AddWithValue("@productImage", cart.ProductImage);
            cmd.Parameters.AddWithValue("@productPrice", cart.ProductPrice);
            cmd.Parameters.AddWithValue("@quantity", cart.Quantity);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }

        public List<Cart> GetAll()
        {
            List<Cart> myCart = new List<Cart>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT * from carts";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader read = cmd.ExecuteReader();
            while(read.Read())
            {
                myCart.Add(new Cart(){
                    CartId = read.GetInt32(0),
                    CustId = read.GetInt32(1),
                    ProductId = read.GetInt32(2),
                    ProductName = read.GetString(3),
                    ProductCategory = read.GetString(4),
                    ProductImage = read.GetString(5),
                    ProductPrice = read.GetDouble(6),
                    Quantity = read.GetInt32(7),
                });
            }
            return myCart;
        }
        public Cart GetOne(int id)
        {
            throw new System.NotImplementedException();
        }
        public void Delete(int id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            Cart cart = new Cart();

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE carts set quantity = @quantity - 1 where productId = @productId";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("productId", cart.ProductId);
            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}