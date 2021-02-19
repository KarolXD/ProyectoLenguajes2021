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
    public class ServiceSupporterController : ControllerBase
    {
        private readonly User_TA_2021Context _context;

        public ServiceSupporterController()
        {
            _context = new User_TA_2021Context();
        }

        // GET: api/ServiceSupporter
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServiceSupporter>>> GetServiceSupporters()
        {
            return await _context.ServiceSupporters.ToListAsync();
        }

        // GET: api/ServiceSupporter/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceSupporter>> GetServiceSupporter(int id)
        {
            var serviceSupporter = await _context.ServiceSupporters.FindAsync(id);

            if (serviceSupporter == null)
            {
                return NotFound();
            }

            return serviceSupporter;
        }

      [HttpPut("{id}")]
        public async Task<IActionResult> PutServiceSupporter(int id, ServiceSupporter serviceSupporter)
        {
            if (id != serviceSupporter.IdServiceSopport)
            {
                return BadRequest();
            }

            _context.Entry(serviceSupporter).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceSupporterExists(id))
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

        // POST: api/ServiceSupporter
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<ServiceSupporter>> PostServiceSupporter(ServiceSupporter serviceSupporter)
        {
            _context.ServiceSupporters.Add(serviceSupporter);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServiceSupporter", new { id = serviceSupporter.IdServiceSopport }, serviceSupporter);
        }

        // DELETE: api/ServiceSupporter/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceSupporter>> DeleteServiceSupporter(int id)
        {
            var serviceSupporter = await _context.ServiceSupporters.FindAsync(id);
            if (serviceSupporter == null)
            {
                return NotFound();
            }

            _context.ServiceSupporters.Remove(serviceSupporter);
            await _context.SaveChangesAsync();

            return serviceSupporter;
        }

        private bool ServiceSupporterExists(int id)
        {
            return _context.ServiceSupporters.Any(e => e.IdServiceSopport == id);
        }
    }
}
