using BackEnd_TeleAtlantico.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.SendData
{
    public class SendDataIssueClient
    {


        public async Task <IEnumerable<IssueClient>> getDetailsIssueClient(int issue_id)
        {
            using (var httpClient = new HttpClient())
            {
                  string url = string.Concat(Constants.Constant.URLAPIissueClient, "getDetailsIssueClient/" + issue_id);
              
                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject <List<IssueClient>>(apiResponse);
                    return respuesta;
                }
            }
        }


    }
}
