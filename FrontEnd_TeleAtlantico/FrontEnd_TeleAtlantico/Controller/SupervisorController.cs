using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FrontEnd_TeleAtlantico.Modals;
using FrontEnd_TeleAtlantico.SendData;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FrontEnd_TeleAtlantico.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupervisorController : ControllerBase
    {
        private SendDataSupervisor sendDataSupervisor = new SendDataSupervisor();

        // GET: api/<SupervisorController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SupervisorController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SupervisorController>
        [HttpPost]
        [Route("[action]/{id}")]
        public ActionResult InsertSupervisor([FromBody] SupervisorUI supervisorUI)
        {   
            return Ok(sendDataSupervisor.InsertSupervisor(supervisorUI));

        }

        // PUT api/<SupervisorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SupervisorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
