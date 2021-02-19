using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Presentation_TeleAtlantico.Models;
using Presentation_TeleAtlantico.SendData;

namespace Presentation_TeleAtlantico.Controllers
{
    public class SupervisorController : Controller
    {
        private SendDataSupervisor sendDataSupervisor = new SendDataSupervisor();

        public IActionResult Index()
        {
            return View();
        }
      
        [HttpPost]
        public async Task<IActionResult> InsertSupervisor([FromBody] SupervisorUI supervisor)
        {
            supervisor.CreationDate = System.DateTime.Now;
            supervisor.UserCreation= HttpContext.Session.GetString("SessionSupervisorUI"); 
            return Ok(await sendDataSupervisor.InsertSupervisor(supervisor));
        }

        [HttpGet]
        public async Task<IActionResult> GetNameSupervisor()
        {
         
            return Ok(await sendDataSupervisor.GetNameSupervisor());
        }


        public IActionResult SignOut() {
            HttpContext.Session.Remove("SessionSupervisorUI");
            return Ok(1);
        }

        [HttpGet]
        public ActionResult Autentication(string email, string password)
        {
            SupervisorUI supervisor = new SupervisorUI();
            supervisor.Email = email; supervisor.Password = password;
            //ActionResult toReturn;
            var result = sendDataSupervisor.Autentication(supervisor.Email, supervisor.Password);
            if (result != null)
            {
                HttpContext.Session.SetString("SessionSupervisorUI", result.Name + " " + result.FirstSurname);           
            }

            return Ok(result);
        }


    }
}
