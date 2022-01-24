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
    public class creditsController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public creditsController(IHttpClientFactory httpClientFactory) =>
            _httpClientFactory = httpClientFactory;

        [HttpGet]
        public async Task<IActionResult> getCredits([FromHeader] string api_key, [FromHeader] int movie_id)
        {
            var URL = "https://api.themoviedb.org/3/movie/" + $"movie_id" + "/credits"+ $"?api_key=ddf9442c69a1aa97524b66e3cba8b9b0";
            //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>


            var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, URL);
        // api key : ddf9442c69a1aa97524b66e3cba8b9b0
        // https://api.themoviedb.org/3/movie/550/credits?api_key=ddf9442c69a1aa97524b66e3cba8b9b0

            creditsContext? result = new creditsContext();

            using (var client = _httpClientFactory.CreateClient())
            {
                var response = await client.SendAsync(httpRequestMessage);

                if (response.IsSuccessStatusCode)
                {
                    var test = await response.Content.ReadAsStringAsync();
                    result = JsonConvert.DeserializeObject<creditsContext>(await response.Content.ReadAsStringAsync());
                }
            }

            return Ok(result);
        }
    }
}

