using Newtonsoft.Json;
using Presentation_TeleAtlantico.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.SendData
{
    public class SendDataIssue
    {
        

     public bool changeClasification(int issue_id, string clasification, string modificationsser)
        {
        
            var httpClient = new HttpClient();

            string url = string.Concat(Constants.Constant.URLIssue, "/SP_UpdateClasificationIssue/" + issue_id + "/" + clasification + "/" + modificationsser);

            var responseTask = httpClient.GetAsync(url);

            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }

            else

                return false;



        }

        public bool changeSupporterAsigned(int issue_id, int supporter_id,  string modificationsser)
        {
        
            var httpClient = new HttpClient();

            string url = string.Concat(Constants.Constant.URLIssue, "/SP_UpdateIdSupporterIssue/" + issue_id + "/" + supporter_id+"/"+ modificationsser);

            var responseTask = httpClient.GetAsync(url);

            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }

            else

                return false;

        }

        public bool changeStatus(int issue_id, string status, string usermodification)
        {
       
            var httpClient = new HttpClient();

            string url = string.Concat(Constants.Constant.URLIssue, "/SP_UpdateStatusIssue/" + issue_id + "/" + status+"/"+ usermodification);

            var responseTask = httpClient.GetAsync(url);

            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                changeStatusApi(issue_id,status,usermodification);
                return true;
            }

            else

                return false;
        }
        public bool changeStatusApi(int issue_id, string status, string modificationsser)
        {

            var httpClient = new HttpClient();

           string url = string.Concat("http://localhost:56642/api/apiissue/changeStatus/" + issue_id + "/" + status + "/" + modificationsser);

            var responseTask = httpClient.GetAsync(url);

            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }

            else

                return false;
        }


        public async Task<IEnumerable<IssueUI>> GetAllRequestById(int IdSupporter)
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLIssue, "/GetAllRequestById/" + IdSupporter);

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<IssueUI>>(apiResponse);
                    return respuesta;
                }
            }
        }
        public int SendEmailAsync(string body, string emailSend,string subject)
        {
            try
            {
                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress("karolmontenegrog10@gmail.com");
                mailMessage.To.Add(emailSend);
                mailMessage.Subject = subject;
                mailMessage.Body = body;
                System.Net.Mail.SmtpClient smtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com");
                smtpClient.Port = 587;
                smtpClient.Credentials = new NetworkCredential("karolmontenegrog10@gmail.com", "idiomas222");
                smtpClient.EnableSsl = true;
                smtpClient.Send(mailMessage);

                return 1;

            }
            catch (Exception ex)
            {
            }
            return  1;
        }

        public async Task<IEnumerable<IssueUI>> GetAllRequestOrderByStatus()
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLIssue, "/GetAllRequestOrderByStatus");

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<IssueUI>>(apiResponse);
                    return respuesta;
                }
            }
        }
        public async Task<IEnumerable<IssueUI>> GetAllRequestOrderByClasification()
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLIssue, "/GetAllRequestOrderByClasification");

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<IssueUI>>(apiResponse);
                    return respuesta;
                }
            }
        }
        public async Task<IEnumerable<IssueUI>> GetAllRequest()
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLIssue, "/GetAllRequest");

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<IssueUI>>(apiResponse);
                    return respuesta;
                }
            }
        }


    }
}
