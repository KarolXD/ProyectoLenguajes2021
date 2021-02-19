using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentation_TeleAtlantico.Models;
using Presentation_TeleAtlantico.SendData;

namespace Presentation_TeleAtlantico.Controllers
{
    public class ServiceSupporterController : Controller
    {
        private SendDataServiceSupporter sendDataServiceSupporter = new SendDataServiceSupporter();
        public IActionResult AddServiceSupporter([FromBody] ServiceSupporterUI serviceSupporterUI)
        {
            serviceSupporterUI.CreationDate = System.DateTime.Now;
            serviceSupporterUI.UserCreation = HttpContext.Session.GetString("SessionSupervisorUI");
            return Ok(sendDataServiceSupporter.AddServiceSupporter(serviceSupporterUI));
        }
    }
}
