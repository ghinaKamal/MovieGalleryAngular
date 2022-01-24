using System;
namespace moviesAPI.Models
{
	public class topMovies2
	{
		public topMovies2()
		{
			results = new List<topMovies>();
		}

		public int page { get; set; }

		public List<topMovies> results { get; set; }


	}
}

