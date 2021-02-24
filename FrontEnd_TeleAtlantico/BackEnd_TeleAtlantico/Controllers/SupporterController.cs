using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd_TeleAtlantico.Models;

namespace BackEnd_TeleAtlantico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupporterController : ControllerBase
    {
        private readonly User_TA_2021Context _context;

        public SupporterController()
        {
            _context = new User_TA_2021Context();
        }

    //    [Route("[action]")]
    //    [HttpGet]
    //    Using Include that is the similar  using join
    //    public IEnumerable<Supporter> join()
    //{
    //    List<Supporter> authors = _context.Supporters.Include(a => a.Issues.Select(
    //       p => p.Clasification

    //        )).ToList();

    //    return authors;
    //}


    [HttpGet]
        [Route("[action]/{email}/{password}")]
        public Supporter Autentication(string email, string password)
        {
          var headers = _context.Supporters.Where(id => id.Email == email && id.Password == password).FirstOrDefault();


            return headers;
        }


        [HttpGet]
        [Route("[action]")]
        public IEnumerable<Supporter> GetNameSupporter()
        {
            List<Supporter> headers = _context.Supporters.Select(p => new Supporter
            {
                IdSupporter = p.IdSupporter,
                Name = p.Name,
                FirstSurname  = p.FirstSurname,
                SecondSurname = p.SecondSurname,
              AsignedAsSupervisor = p.AsignedAsSupervisor
            }).ToList();


            return headers;
        }


        [HttpGet]
        [Route("[action]/{supporterId}")]
        public List<Supporter> GetNameSupporterById(int supporterId)
        {

            List<Supporter> headers = _context.Supporters.Select(p => new Supporter
            {
                IdSupporter = p.IdSupporter,
                Name = p.Name ,
                FirstSurname = p.FirstSurname,
               SecondSurname = p.SecondSurname,
                AsignedAsSupervisor = p.AsignedAsSupervisor


            }).Where(id => id.IdSupporter == supporterId).ToList();


            return headers;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<Supporter>> PostSupporter(Supporter supporter)
        {
            _context.Supporters.Add(supporter);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSupporter", new { id = supporter.IdSupporter }, supporter);
        }


        // GET: api/Supporter
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Supporter>>> GetSupporters()
        {
            return await _context.Supporters.ToListAsync();
        }

        // GET: api/Supporter/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Supporter>> GetSupporter(int id)
        {
            var supporter = await _context.Supporters.FindAsync(id);

            if (supporter == null)
            {
                return NotFound();
            }

            return supporter;
        }

        // PUT: api/Supporter/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupporter(int id, Supporter supporter)
        {
            if (id != supporter.IdSupporter)
            {
                return BadRequest();
            }

            _context.Entry(supporter).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupporterExists(id))
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

        // DELETE: api/Supporter/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Supporter>> DeleteSupporter(int id)
        {
            var supporter = await _context.Supporters.FindAsync(id);
            if (supporter == null)
            {
                return NotFound();
            }

            _context.Supporters.Remove(supporter);
            await _context.SaveChangesAsync();

            return supporter;
        }

        private bool SupporterExists(int id)
        {
            return _context.Supporters.Any(e => e.IdSupporter == id);
        }
    }
}
