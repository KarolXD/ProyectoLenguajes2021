using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd_TeleAtlantico.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd_TeleAtlantico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {


        private readonly User_TA_2021Context _context;

        public NoteController()
        {
            _context = new User_TA_2021Context();
        }

        // GET: api/Note
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetNote()
        {
            return await _context.Notes.ToListAsync();
        }

        //Agregar notas
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<Note>> PostNote(Note note)
        {
            note.CreationDate = DateTime.Parse(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss"));
            note.NoteTime = DateTime.Parse(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss"));

            _context.Notes.Add(note);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNote", new { id = note.IdNote }, note);
        }
        [HttpPut]
        [Route("[action]/{id}")]
        public async Task<ActionResult<Note>> UpdateNote(Note note, int id)
        {
            note.ModificationDate = DateTime.Parse(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss"));


           var note1 = getNoteByIdNote(id); note.NoteTime = note1.NoteTime;  note.CreationDate = note1.CreationDate; note.UserCreation = note1.UserCreation;


            if (id != note.IdNote)
            {
                return BadRequest();
            }

            _context.Entry(note).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!NoteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }





        [HttpGet]
        [Route("[action]/{issue_id}")]
        public IEnumerable<Note> GetNoteById(int issue_id)
        {
            List<Note> headers = _context.Notes.Select(p => new Note
            {
                IdNote = p.IdNote,
                Name = p.Name,
                NoteTime=  p.NoteTime,
                TypeUser= p.TypeUser,
                IsUserSu=  p.IsUserSu,
                IssueId=p.IssueId
              


            }).Where(id => id.IssueId == issue_id).OrderByDescending(a => a.NoteTime).ToList();
            

            return headers;
        }


        public Note getNoteByIdNote(int idNote)
        {

            //TODO: manejar excepciones
            var student = _context.Notes.Where(a => a.IdNote.Equals(idNote)).Select(p=> new Note
            {
                NoteTime = p.NoteTime,
                CreationDate = p.CreationDate,
                UserCreation=  p.UserCreation

            }).FirstOrDefault();

            return student;
        }


        private bool NoteExists(int id)
        {
            return _context.Notes.Any(e => e.IdNote == id);
        }



    }
}
