using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd_TeleAtlantico.Models;
using Microsoft.Data.SqlClient;

namespace BackEnd_TeleAtlantico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly User_TA_2021Context _context;

        public ServiceController()
        {
            _context = new User_TA_2021Context();
        }


        [HttpGet]
        [Route("[action]/{idSupporter}")]
        public IActionResult GetNameNotHasSupporterById(int idSupporter)
        {
            try
            {
                var id = new SqlParameter("@idSupporter", idSupporter);
                var services = _context.Services
                               .FromSqlRaw($"SP_GetNameNotHasSupporterById @idSupporter", id)
                               .AsEnumerable();



               

                return Ok(services);

            }
            catch { throw; }



        }

        [HttpGet]
        [Route("[action]/{idSupporter}")]
        public IActionResult GetNameHasSupporterById(int idSupporter)
        {
            try
            {
                var id = new SqlParameter("@idSupporter", idSupporter);
                var services = _context.Services
                               .FromSqlRaw($"SP_GetNameHasSupporterById @idSupporter", id)
                               .AsEnumerable();





                return Ok(services);

            }
            catch { throw; }



        }



        // GET: api/Service
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Service>>> GetServices()
        {
            return await _context.Services.ToListAsync();
        }

        // GET: api/Service/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Service>> GetService(int id)
        {
            var service = await _context.Services.FindAsync(id);

            if (service == null)
            {
                return NotFound();
            }

            return service;
        }

        // PUT: api/Service/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutService(int id, Service service)
        {
            if (id != service.IdService)
            {
                return BadRequest();
            }

            _context.Entry(service).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceExists(id))
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

        // POST: api/Service
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Service>> PostService(Service service)
        {
            _context.Services.Add(service);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetService", new { id = service.IdService }, service);
        }

        // DELETE: api/Service/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Service>> DeleteService(int id)
        {
            var service = await _context.Services.FindAsync(id);
            if (service == null)
            {
                return NotFound();
            }

            _context.Services.Remove(service);
            await _context.SaveChangesAsync();

            return service;
        }

        private bool ServiceExists(int id)
        {
            return _context.Services.Any(e => e.IdService == id);
        }
    }
}
