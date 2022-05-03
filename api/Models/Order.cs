using System;
namespace Api.Models
{
    public class Order
    {
        public int OrderId {get;set;}
        public int CustId{get;set;}
        public DateTime OrderRecordDate {get;set;}
        public string OrderProduct {get; set;}
        public double OrderTotal {get;set;}
        public int Completed {get; set;}
    }
}