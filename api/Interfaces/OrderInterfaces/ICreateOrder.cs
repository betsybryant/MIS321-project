using Api.Models;
namespace Api.Interfaces.OrderInterfaces
{
    public interface ICreateOrder
    {
         public void Create(Order order);
    }
}