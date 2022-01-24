using System;
namespace moviesAPI.Models
{
	public class creditsContext
	{
		public creditsContext()
		{
			results = new List<credits>();
		}
		public int page { get; set; }

		public List<credits> results { get; set; }
	}
}

