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
    public class SupervisorController : ControllerBase
    {
        private readonly User_TA_2021Context _context;

        public SupervisorController()
        {
            _context = new User_TA_2021Context();
        }
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<Supervisor>> PostSupervisor(Supervisor supervisor)
        {
            _context.Supervisors.Add(supervisor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSupervisor", new { id = supervisor.IdSupervisor }, supervisor);
        }


        [HttpGet]
        [Route("[action]")]
        public IEnumerable<Supervisor> GetNameSupervisor()
        {
            List<Supervisor> headers = _context.Supervisors.Select(p => new Supervisor
            {
                IdSupervisor = p.IdSupervisor,
                Name = p.Name,
                FirstSurname = p.FirstSurname,
                SecondSurname = p.SecondSurname,

            }).ToList();


            return headers;
        }




      
        [HttpGet]
        [Route("[action]/{email}/{password}")]
        public Supervisor Autentication(string email, string password)
        {
            var headers = _context.Supervisors.Where(id => id.Email == email && id.Password == password).FirstOrDefault();
            return headers;
        }











        // GET: api/Supervisor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Supervisor>>> GetSupervisors()
        {
            return await _context.Supervisors.ToListAsync();
        }

        // GET: api/Supervisor/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Supervisor>> GetSupervisor(int id)
        {
            var supervisor = await _context.Supervisors.FindAsync(id);

            if (supervisor == null)
            {
                return NotFound();
            }

            return supervisor;
        }

        // PUT: api/Supervisor/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupervisor(int id, Supervisor supervisor)
        {
            if (id != supervisor.IdSupervisor)
            {
                return BadRequest();
            }

            _context.Entry(supervisor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupervisorExists(id))
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

   
        // DELETE: api/Supervisor/5
        [HttpDelete("{id}")]
        [Route("[action]")]
        public async Task<ActionResult<Supervisor>> DeleteSupervisor(int id)
        {
            var supervisor = await _context.Supervisors.FindAsync(id);
            if (supervisor == null)
            {
                return NotFound();
            }

            _context.Supervisors.Remove(supervisor);
            await _context.SaveChangesAsync();

            return supervisor;
        }

        private bool SupervisorExists(int id)
        {
            return _context.Supervisors.Any(e => e.IdSupervisor == id);
        }
    }
}
