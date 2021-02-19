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
    public class SendDataNote
    {


        public async System.Threading.Tasks.Task<IEnumerable<NoteUI>> GetNoteById(int issue_id)
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat(Constants.Constant.URLNote, "/GetNoteById/"+ issue_id);

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<NoteUI>>(apiResponse);
                    return respuesta;
                }
            }
        }
        public bool insertNote(NoteUI note)
        {
            var httpClient = new HttpClient();
            StringContent contenido = new StringContent(JsonConvert.SerializeObject(note), Encoding.UTF8, "application/json");
            string url = string.Concat(Constants.Constant.URLNote, "/PostNote");
            var responseTask = httpClient.PostAsync(url, contenido);
            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }  else
                return false;
        }
        public bool updateNote(NoteUI note)
        {
            var httpClient = new HttpClient();
            StringContent contenido = new StringContent(JsonConvert.SerializeObject(note), Encoding.UTF8, "application/json");
            string url = string.Concat(Constants.Constant.URLNote, "/UpdateNote/"+note.IdNote);
            var responseTask = httpClient.PutAsync(url, contenido);
            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }
            else
                return false;
        }


        //pasar al API BACK END
        public bool insertComment(CommentUI comment)
        {
            var httpClient = new HttpClient();
            StringContent contenido = new StringContent(JsonConvert.SerializeObject(comment), Encoding.UTF8, "application/json");
            string url = string.Concat("http://localhost:56642/api/apicomment/insertComment");
            var responseTask = httpClient.PostAsync(url, contenido);
            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }
            else
                return false;
        }

        public bool updateComment(CommentUI comment)
        {
            var httpClient = new HttpClient();
            StringContent contenido = new StringContent(JsonConvert.SerializeObject(comment), Encoding.UTF8, "application/json");
            string url = string.Concat("http://localhost:56642/api/apicomment/updateComment/" + comment.comment_id);
            var responseTask = httpClient.PutAsync(url, contenido);
            responseTask.Wait();

            var apiResponse = responseTask.Result;
            if (apiResponse.IsSuccessStatusCode)
            {
                return true;
            }
            else
                return false;
        }
        //pasar al API BACK END
        public async System.Threading.Tasks.Task<IEnumerable<CommentUI>> GetCommentById(int issue_id)
        {
            using (var httpClient = new HttpClient())
            {
                string url = string.Concat("http://localhost:56642/api/apicomment/GetCommentById/" + issue_id);

                using (var response = await httpClient.GetAsync(url))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var respuesta = JsonConvert.DeserializeObject<List<CommentUI>>(apiResponse);
                    return respuesta;
                }
            }
        }

    }
}
