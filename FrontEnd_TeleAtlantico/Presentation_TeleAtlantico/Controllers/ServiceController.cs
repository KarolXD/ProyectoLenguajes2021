using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentation_TeleAtlantico.SendData;

namespace Presentation_TeleAtlantico.Controllers
{
    public class ServiceController : Controller
    {
        private SendDataService sendDataService = new SendDataService();



        [HttpGet]

        //does not have those services
        public async Task<IActionResult> GetNameNotHasSupporterById(int idSupporter)
        {
            var respuesta = await sendDataService.GetNameNotHasSupporterById(idSupporter);

            return Ok(respuesta);
        }


        [HttpGet]
        public async Task<IActionResult> GetNameHasSupporterById(int idSupporter)
        {
            var respuesta = await sendDataService.GetNameHasSupporterById(idSupporter);

            return Ok(respuesta);
        }




        // GET: ServiceController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ServiceController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ServiceController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        
    }
}
