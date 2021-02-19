using Newtonsoft.Json;
using Presentation_TeleAtlantico.Models;
using Presentation_TeleAtlantico.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text;

namespace Presentation_TeleAtlantico.SendData
{
    public class SendDataService
    {


        
   

        public async System.Threading.Tasks.Task<IEnumerable<ServiceUI>> GetNameService()
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLService, "/GetNameService");

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<ServiceUI>>(apiResponse);
                    return respuesta;
                }
            }
        }
        
    }
}
