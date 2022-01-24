﻿using System;
namespace moviesAPI.Models
{
	public class topTvShows
	{
        public string poster_path { get; set; }
        public double popularity { get; set; }
        public int id { get; set; }
        public string backdrop_path { get; set; }
        public double vote_average { get; set; }
        public string overview { get; set; }
        public string first_air_date { get; set; }
        public List<string> origin_country { get; set; }
        public List<int> genre_ids { get; set; }
        public string original_language { get; set; }
        public int vote_count { get; set; }
        public string name { get; set; }
        public string original_name { get; set; }
    }

    //public class Root
    //{
    //    public int page { get; set; }
    //    public List<Result> results { get; set; }
    //    public int total_results { get; set; }
    //    public int total_pages { get; set; }
    //}






}

