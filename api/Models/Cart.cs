namespace Api.Models
{
    public class Cart
    {
        public int CartId {get; set;}
        public int CustId {get; set;}
        public int ProductId {get; set;}
        public string ProductName {get; set;}
        public string ProductCategory {get; set;}
        public string ProductImage {get; set;}
        public double ProductPrice {get; set;}
        public int Quantity {get; set;}
    }
}