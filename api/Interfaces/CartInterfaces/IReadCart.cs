using System.Collections.Generic;
using Api.Models;

namespace api.Interfaces.CartInterfaces
{
    public interface IReadCart
    {
        public List<Cart> GetAll();
        public Cart GetOne(int id);
    }
}