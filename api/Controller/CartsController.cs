using System.Net.Mime;
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
    public class CartsController : ControllerBase
    {
        // GET: api/Customers
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Cart> Get()
        {
            CartUtil cartUtil = new CartUtil();
            return cartUtil.GetAll();
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
        public void Post([FromBody] Cart cart)
        {
            CartUtil cartUtil = new CartUtil();
            cartUtil.Create(cart);
        }

        // PUT: api/Customers/5
        [EnableCors("OpenPolicy")]
        [HttpPut]
        public void Put(int id)
        {
            CartUtil cartUtil = new CartUtil();
            // cartUtil.Update(cart);
        }

        // DELETE: api/Customers/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            CartUtil cartUtil = new CartUtil();
            cartUtil.Delete(id);
        }
    }
}
