namespace YouAreHeard.Models
{
    public class BlogDTO
    {
        public int? blogId { get; set; }

        public int userId { get; set; }

        public string details { get; set; }

        public string title { get; set; }

        public string image { get; set; }

        public DateTime date { get; set; }

        public string? UserName { get; set; }
    }
}