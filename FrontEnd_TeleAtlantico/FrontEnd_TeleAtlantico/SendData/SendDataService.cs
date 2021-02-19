using FrontEnd_TeleAtlantico.Modals;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace FrontEnd_TeleAtlantico.SendData
{
    public class SendDataService
    {
       

        public async System.Threading.Tasks.Task<ServiceUI> GetNameService()
        {
            using (var httpClient = new HttpClient())
            {

                string url = string.Concat(Constants2.Constant2.URLService, "/GetNameService");
                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();

                    var respuesta = JsonConvert.DeserializeObject<ServiceUI>(apiResponse);
                    return respuesta;
                }
            }
        }
    }
}
