using System;
namespace moviesAPI.Models
{
	public class topTvShows2
	{
		public topTvShows2()
		{
			results = new List<topTvShows>();
		}

		public int page { get; set; }

		public List<topTvShows> results { get; set; }
	}
}

