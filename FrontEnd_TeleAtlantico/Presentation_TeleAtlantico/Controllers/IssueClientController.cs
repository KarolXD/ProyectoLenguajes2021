using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentation_TeleAtlantico.SendData;

namespace Presentation_TeleAtlantico.Controllers
{

    public class IssueClientController : ControllerBase
    {
        
        private SendDataIssueClient sendDataIssueClient = new SendDataIssueClient();

        [HttpGet]
        public async Task<IActionResult> getDetailsIssueClient(int issue_id)
        {
            var respuesta = await sendDataIssueClient.getDetailsIssueClient(issue_id);

            return Ok(respuesta);
        }

    }
}
