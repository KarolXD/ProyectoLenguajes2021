using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd_TeleAtlantico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiIssueController : ControllerBase
    {




        [Route("[action]/{issue_id}/{status}/{modificationsser}")]
        [HttpGet]
        public bool changeStatus(int issue_id, string status, string modificationsser)
        {

            var httpClient = new HttpClient();

            string url = string.Concat("http://localhost:8080/issue/updateStatus/" + issue_id + "/" + status + "/" + modificationsser);

            var responseTask = httpClient.GetAsync(url);

            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }

            else

                return false;
        }

    }
}
