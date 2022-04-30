using System.Net.Mime;
using Api.Models;
using Api.Interfaces.ProductInterfaces;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace Api.Database
{
    public class ProductUtil : ICreateProduct, IReadProduct
    {
        public void Create(Product product)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();  

            string stm = @"INSERT INTO products(productId, productName, productCategory, productImage, productPrice, deleted) VALUES(@productId, @productName, @productCategory, @productImage, @productPrice, @deleted)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@productId", product.ProductId);
            cmd.Parameters.AddWithValue("@productName", product.ProductName);
            cmd.Parameters.AddWithValue("@productCategory", product.ProductCategory);
            cmd.Parameters.AddWithValue("@productImage", product.ProductImage);
            cmd.Parameters.AddWithValue("@productPrice", product.ProductPrice);
            cmd.Parameters.AddWithValue("@deleted", product.ProductPrice);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }

        public List<Product> GetAll()
        {
            List<Product> myProduct = new List<Product>();
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT * from products";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader read = cmd.ExecuteReader();
            while(read.Read())
            {
                myProduct.Add(new Product(){
                    ProductId = read.GetInt32(0),
                    ProductName = read.GetString(1),
                    ProductCategory = read.GetString(2),
                    ProductImage = read.GetString(3),
                    ProductPrice = read.GetDouble(4),
                    Deleted = read.GetBoolean(5),
                });
            }
            return myProduct;
        }
    }
}