using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using FrontEnd_TeleAtlantico.Modals;
using Newtonsoft.Json;

namespace FrontEnd_TeleAtlantico.SendData
{
    public class SendDataSupervisor
    {


        public async Task<bool> InsertSupervisor(SupervisorUI supervisorUI)
        {


            using (var httpClient = new HttpClient())
            {
                StringContent contenido = new StringContent(JsonConvert.SerializeObject(supervisorUI), Encoding.UTF8, "application/json");
                using (var response = await httpClient.PostAsync(Constants2.Constant2.URLSupervisor + "/", contenido))
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
