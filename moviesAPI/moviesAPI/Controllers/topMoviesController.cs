using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using moviesAPI.Models;
using Newtonsoft.Json;


namespace moviesAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class topMoviesController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public topMoviesController(IHttpClientFactory httpClientFactory) =>
            _httpClientFactory = httpClientFactory;

        [HttpGet]
        public async Task<IActionResult> GetTopMovies([FromHeader] string api_key)
        {
            var URL = "https://api.themoviedb.org/3/movie/popular" + $"?api_key=ddf9442c69a1aa97524b66e3cba8b9b0";
            var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, URL);
            // api key : ddf9442c69a1aa97524b66e3cba8b9b0

            topMovies2? result = new topMovies2();

            using (var client = _httpClientFactory.CreateClient())
            {
                var response = await client.SendAsync(httpRequestMessage);
   
                if (response.IsSuccessStatusCode)
                {
                    var test = await response.Content.ReadAsStringAsync();
                    result = JsonConvert.DeserializeObject<topMovies2>(await response.Content.ReadAsStringAsync());
                }
            }

            return Ok(result.results);
        }

    }
}

