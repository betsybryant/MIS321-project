using System.Collections.Generic;
using Api.Models;
namespace Api.Interfaces.OrderInterfaces
{
    public interface IReadOrder
    {
         public List<Order> GetAll();
        //  public Order GetOne(int id);
    }
}