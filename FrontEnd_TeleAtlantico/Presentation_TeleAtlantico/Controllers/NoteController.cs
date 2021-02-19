using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentation_TeleAtlantico.Models;
using Presentation_TeleAtlantico.SendData;

namespace Presentation_TeleAtlantico.Controllers
{
    public class NoteController : Controller
    {
      

        private SendDataNote sendaDataNote = new SendDataNote();

        [HttpGet]
        public async Task<IActionResult> GetNoteById(int issue_id)
        {
            return Ok(await sendaDataNote.GetNoteById(issue_id));
        }


        

        [HttpGet]
        public IActionResult updateNote(int idNote,int issue_id, string description, int user)
        {
            NoteUI note = new NoteUI();
            note.IssueId = issue_id;
            note.Name = description;
            note.IsUserSu = user;
            note.IdNote = idNote;
            string supervisor = HttpContext.Session.GetString("SessionSupervisorUI");
            string soportista = HttpContext.Session.GetString("SessionSupportUI");

            if (user == 1)
            {
                note.ModificationUser = supervisor;
                note.TypeUser = "Supervisor";

                return Ok(sendaDataNote.updateNote(note));
            }
            else
            {
                note.ModificationUser = soportista;
                note.TypeUser = "Sopporter";
                return Ok(sendaDataNote.updateNote(note));
            }

        }

        [HttpGet]
        public IActionResult insertNote(int issue_id, string description, int user ){
            NoteUI note = new NoteUI();
            note.IssueId = issue_id;
            note.Name = description;
            note.IsUserSu = user;
            string supervisor = HttpContext.Session.GetString("SessionSupervisorUI");
            string soportista = HttpContext.Session.GetString("SessionSupportUI");

            if (user == 1) {
                note.UserCreation = supervisor;
                note.TypeUser = "Supervisor";
            
                return Ok(sendaDataNote.insertNote(note));
            }
            else {
                note.UserCreation = soportista;
                note.TypeUser = "Sopporter";
                return Ok(sendaDataNote.insertNote(note));
            }
                
        }


        [HttpGet]
        public IActionResult insertComment(int issue_id, string description)
        {
            string soportista = HttpContext.Session.GetString("SessionSupportUI");

            CommentUI comment = new CommentUI();
            comment.issue_id = issue_id;
            comment.description = description;
            comment.usercreation = soportista;

           return Ok(sendaDataNote.insertComment(comment));
        }

        [HttpGet]
        public IActionResult updateComment(int comment_id,int issue_id, string description)
        {
            string soportista = HttpContext.Session.GetString("SessionSupportUI");

            CommentUI comment = new CommentUI();
            comment.comment_id = comment_id;
            comment.issue_id = issue_id;
            comment.description = description;
            comment.usercreation = soportista;//modification
            comment.isuser=1;
            comment.typeuser = "Soportista";
            return Ok(sendaDataNote.updateComment(comment));
        }

        

        [HttpGet]
        public async Task<IActionResult> GetCommentById(int issue_id)
        {
            return Ok(await sendaDataNote.GetCommentById(issue_id));
        }
    }
}
