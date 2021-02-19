using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using BackEnd_TeleAtlantico.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BackEnd_TeleAtlantico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiCommentController : ControllerBase
    {


        [Route("[action]")]
        [HttpPost]
        public bool insertComment(Comment comment)
        {
            var httpClient = new HttpClient();
            StringContent contenido = new StringContent(JsonConvert.SerializeObject(comment), Encoding.UTF8, "application/json");
            string url = string.Concat("http://localhost:8080/comment/addComment");
            var responseTask = httpClient.PostAsync(url, contenido);
            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }
            else
                return false;
        }
        [Route("[action]/{id}")]
        [HttpPut]
        public bool updateComment(Comment comment, int id)
        {
           comment.comment = DateTime.Parse(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss"));
            var httpClient = new HttpClient();
            StringContent contenido = new StringContent(JsonConvert.SerializeObject(comment), Encoding.UTF8, "application/json");
            string url = string.Concat("http://localhost:8080/comment/updatecomment/" + id);
            var responseTask = httpClient.PutAsync(url, contenido);
            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }
            else
                return false;
        }
        [Route("[action]/{issue_id}")]
        [HttpGet]
        public async System.Threading.Tasks.Task<IEnumerable<Comment>> GetCommentById(int issue_id)
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat("http://localhost:8080/comment/getCommentById/" + issue_id);

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<Comment>>(apiResponse);
                    return respuesta;
                }
            }
        }

    }
}
