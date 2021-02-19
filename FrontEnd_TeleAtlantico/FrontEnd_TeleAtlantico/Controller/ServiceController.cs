using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FrontEnd_TeleAtlantico.SendData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FrontEnd_TeleAtlantico.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private SendDataService sendDataService = new SendDataService();



      

        // GET: api/<SupervisorController>

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public ActionResult GetNameService()
        {
            return Ok(sendDataService.GetNameService());

        }



    } }
