using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentation_TeleAtlantico.SendData;

namespace Presentation_TeleAtlantico.Controllers
{
    public class IssueController : Controller
    {
        private SendDataIssue sendaDataIssue = new SendDataIssue();

        [HttpGet]
        public async Task<IActionResult> GetAllRequest()
        {
            return Ok( await sendaDataIssue.GetAllRequest());
        }
        [HttpGet]
        public async Task<IActionResult> GetAllRequestOrderByClasification()
        {
            return Ok(await sendaDataIssue.GetAllRequestOrderByClasification());
        }
        [HttpGet]
        public async Task<IActionResult> GetAllRequestOrderByStatus()
        {
            return Ok(await sendaDataIssue.GetAllRequestOrderByStatus());
        }


        [HttpGet]
        public async Task<IActionResult> GetAllRequestById()
        {
            var idSupporter= HttpContext.Session.GetString("SessionIdSupport");
            return Ok(await sendaDataIssue.GetAllRequestById(Convert.ToInt32(idSupporter)));
        }

        [HttpGet]
        public IActionResult sendEmail(string body, string email, string subject)
        {
         //   string email = "ja";
           // string subject = "TeleAtlantico, informacion sobre su reporte";
            return Ok(sendaDataIssue.SendEmailAsync(body,email,subject));
        }




        [HttpGet]
        public IActionResult changeStatus(int issue_id, string status, int user)
        {
            string supervisor= HttpContext.Session.GetString("SessionSupervisorUI");

            string soportista = HttpContext.Session.GetString("SessionSupportUI");

            if (user == 1)
            return Ok(sendaDataIssue.changeStatus(issue_id, status, supervisor));
            else
            return Ok(sendaDataIssue.changeStatus(issue_id, status, soportista));


        }

        [HttpGet]
        public IActionResult changeSupporterAsigned(int issue_id, int supporter_id)
        {
            string modificationuser = HttpContext.Session.GetString("SessionSupervisorUI");
            return Ok(sendaDataIssue.changeSupporterAsigned(issue_id, supporter_id, modificationuser));
          

        }

        [HttpGet]
        public IActionResult changeClasification(int issue_id, string clasification)
        {
            string modificationuser = HttpContext.Session.GetString("SessionSupervisorUI");
            return Ok(sendaDataIssue.changeClasification(issue_id, clasification, modificationuser));


        }


    }
}
