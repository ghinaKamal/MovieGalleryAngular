using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using moviesAPI.Models;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace moviesAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MovieDetailsController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public MovieDetailsController(IHttpClientFactory httpClientFactory) =>
            _httpClientFactory = httpClientFactory;

        [HttpGet]
        [Route("/movieDetails/getMovieDetails/{movie_id}")]
        public async Task<IActionResult> getMovieDetails([FromHeader] string api_key, int movie_id)
        {
            var URL = "https://api.themoviedb.org/3/movie/" + $"{movie_id}" + $"?api_key=ddf9442c69a1aa97524b66e3cba8b9b0";
            var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, URL);
            // api key : ddf9442c69a1aa97524b66e3cba8b9b0


            movieDetails? result = new movieDetails();

            using (var client = _httpClientFactory.CreateClient())
            {
                var response = await client.SendAsync(httpRequestMessage);

                if (response.IsSuccessStatusCode)
                {
                    var test = await response.Content.ReadAsStringAsync();
                    result = JsonConvert.DeserializeObject<movieDetails>(await response.Content.ReadAsStringAsync());
                }
            }
            List<movieDetails> AuthorList = new List<movieDetails>();

            return Ok(AuthorList.Append(result));
        }
    }
}

