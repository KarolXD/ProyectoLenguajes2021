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
    public class SupporterController : Controller
    {
        private SendDataSupporter sendDataSupporter = new SendDataSupporter();
        private SendDataSupervisor sendDataSupervisor = new SendDataSupervisor();
        public IActionResult Index()
        {
            return View();
        }



     
        [HttpGet]
        public async Task<IActionResult> GetNameSupporter()
        {
            return Ok(await sendDataSupporter.GetNameSupporter());
        }

        [HttpGet]
        public async Task<IActionResult> GetNameSupporterById(int supporterId)
        {
            return Ok(await sendDataSupporter.GetNameSupporterById(supporterId));
        }

        [HttpPost]
        public async Task<IActionResult> InsertSupporter([FromBody] SupporterUI supporter)
        {
            supporter.CreationDate = System.DateTime.Now;
            supporter.UserCreation = HttpContext.Session.GetString("SessionSupervisorUI");
            return Ok(await sendDataSupporter.InsertSupporter(supporter));
        }

        public IActionResult SignOut()
        {
            HttpContext.Session.Remove("SessionSupportUI");
            return Ok(1);
        }

      


        [HttpGet]
        public IActionResult Autentication(string email, string password)
        {
            SupporterUI supporter = new SupporterUI();
            supporter.Email = email; supporter.Password = password;
          
            var result =  sendDataSupporter.Autentication(supporter.Email, supporter.Password);
            if (result != null)
            {
               HttpContext.Session.SetString("SessionSupportUI", result.Name+""+result.FirstSurname);
               HttpContext.Session.SetString("SessionIdSupport",   Convert.ToString(result.IdSupporter));

                var hola = HttpContext.Session.GetString("SessionIdSupport");

            }
            return Ok(result);

        }
       
    }
    


}
