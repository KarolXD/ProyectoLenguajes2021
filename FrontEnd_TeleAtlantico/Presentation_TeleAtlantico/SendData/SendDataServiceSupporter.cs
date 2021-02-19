using Newtonsoft.Json;
using Presentation_TeleAtlantico.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.SendData
{
    public class SendDataServiceSupporter
    {

        public async Task<bool> AddServiceSupporter(ServiceSupporterUI serviceSupporterUI)
        {
            using (var httpClient = new HttpClient())
            {
                StringContent contenido = new StringContent(JsonConvert.SerializeObject(serviceSupporterUI), Encoding.UTF8, "application/json");
                using (var response = await httpClient.PostAsync(Constants.Constant.URLServiceSupporter + "/PostServiceSupporter", contenido))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    if (response.IsSuccessStatusCode)
                        return true;

                    else
                        return false;


                }
            }

        }


    }
}
