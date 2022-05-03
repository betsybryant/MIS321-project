using System;
namespace Api.Models
{
    public class Order
    {
        public int OrderId {get;set;}
        public int CustId{get;set;}
        public DateTime OrderRecordDate {get;set;}
        public DateTime OrderCompleteDate {get; set;}
        public string OrderProduct {get; set;}
        public double OrderTotal {get;set;}
    }
}