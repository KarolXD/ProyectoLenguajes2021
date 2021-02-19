using Newtonsoft.Json;
using Presentation_TeleAtlantico.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Presentation_TeleAtlantico.SendData
{
    public class SendDataSupporter
    {

        

        public async System.Threading.Tasks.Task<List<SupporterUI>> GetNameSupporterById(int supporterId)
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLSupporter, "/GetNameSupporterById/"+ supporterId);

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<SupporterUI>>(apiResponse);

             
                        return respuesta;

              
                 
                }
            }
        }

        public async System.Threading.Tasks.Task<IEnumerable<SupporterUI>> GetNameSupporter()
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLSupporter, "/GetNameSupporter");

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<SupporterUI>>(apiResponse);
                    return respuesta;
                }
            }
        }

        public async Task<bool> InsertSupporter(SupporterUI supporter)
        {
            using (var httpClient = new HttpClient())
            {
                StringContent contenido = new StringContent(JsonConvert.SerializeObject(supporter), Encoding.UTF8, "application/json");
                using (var response = await httpClient.PostAsync(Constants.Constant.URLSupporter + "/PostSupporter", contenido))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    if (response.IsSuccessStatusCode)
                        return true;

                    else
                        return false;


                }
            }

        }
        public SupporterUI Autentication(string email, string password)
        {
            SupporterUI students = null;
            var httpClient = new HttpClient();

            string url = string.Concat(Constants.Constant.URLSupporter, "/autentication/" + email + "/" + password);

            var responseTask = httpClient.GetAsync(url);

                responseTask.Wait();

                var apiResponse = responseTask.Result;
                if (apiResponse.IsSuccessStatusCode)
                {
                var readTask = apiResponse.Content.ReadAsAsync<SupporterUI>();//await response.Content.ReadAsStringAsync();
                    students = readTask.Result;
                }

                else

                    return null;

           
            
            return students;
        }

       

    }
}
