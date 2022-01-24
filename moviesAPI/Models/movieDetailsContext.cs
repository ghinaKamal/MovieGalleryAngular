using System;
namespace moviesAPI.Models
{
	public class movieDetailsContext
	{
		public movieDetailsContext()
		{
			results = new List<movieDetails>();
		}
		public int page { get; set; }

		public List<movieDetails> results { get; set; }
	}
}

