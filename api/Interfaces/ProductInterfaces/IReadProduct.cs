using System.Collections.Generic;
using Api.Models;
namespace Api.Interfaces.ProductInterfaces
{
    public interface IReadProduct
    {
        public List<Product> GetAll();
        // public Customer GetOne(int id);
    }
}