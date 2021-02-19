using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using BackEnd_TeleAtlantico.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BackEnd_TeleAtlantico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiIssueClientController : ControllerBase
    {


        [Route("[action]/{issue_id}")]
        [HttpGet]
        public async Task<IEnumerable<IssueClient>> getDetailsIssueClient(int issue_id)
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat("http://localhost:8080/issue/getDetailsIssueClient/" + issue_id);

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    // var respuesta = JsonConvert.DeserializeObject<List<ServiceUI>>(apiResponse);

                    var respuesta = JsonConvert.DeserializeObject<List<IssueClient>>(apiResponse);
                    return respuesta;
                }
            }
        }


    }
}
