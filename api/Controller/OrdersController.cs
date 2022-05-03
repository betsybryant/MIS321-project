using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Database;
using Api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        // GET: api/Customers
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Order> Get()
        {
            OrderUtil orderUtil = new OrderUtil();
            return orderUtil.GetAll();
        }

        // GET: api/Customers/5
        // [EnableCors("OpenPolicy")]
        // [HttpGet("{id}", Name = "Get")]
        // // public string Get(int id)
        // // {
        // //     CustomerUtil customerUtil = new CustomerUtil();
        // //     // return customerUtil.GetOne();
        // // }

        // POST: api/Customers
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Order order)
        {
            //System.Console.WriteLine("made it to controller");
            OrderUtil orderUtil = new OrderUtil();
            orderUtil.Create(order);
        }

        // PUT: api/Customers/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id)
        {
            OrderUtil orderUtil = new OrderUtil();
            orderUtil.Update(id);
        }

        // DELETE: api/Customers/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
