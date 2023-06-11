using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace Fiorello.Areas.Admin.ViewModels.Product
{
    public class ProductEditVM
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public int DiscountId { get; set; }
        public ICollection<string> Images { get; set; }
        public List<IFormFile> NewImage { get; set; }
        public ICollection<bool> IsMain { get; set; }
    }
}
