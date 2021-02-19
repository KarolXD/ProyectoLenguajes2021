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
    public class IssueController : ControllerBase
    {
        private readonly User_TA_2021Context _context;

        public IssueController()
        {
            _context = new User_TA_2021Context();
        }

        // GET: api/Issue
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Issue>>> GetIssues()
        {
            return await _context.Issues.ToListAsync();
        }



        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Issue> GetAllRequest()
        {
            try
           {
                IEnumerable<Issue> quey = _context.Issues.Select(p => new Issue
                {
                  IssueId = p.IssueId,
                    Report = p.Report,
                    Idsupporter = p.Idsupporter,
                    Clasification=  p.Clasification,
                    Status =p.Status,
                    Register=p.Register
                }).OrderByDescending(a => a.Register).ToList();


                return quey;

            }
            catch { throw; }
        }
        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Issue> GetAllRequestOrderByClasification()
        {
            try
            {
                IEnumerable<Issue> quey = _context.Issues.Select(p => new Issue
                {
                    IssueId = p.IssueId,
                    Report = p.Report,
                    Idsupporter = p.Idsupporter,
                    Clasification = p.Clasification,
                    Status = p.Status,
                    Register = p.Register
                }).OrderBy(a => a.Clasification).ToList();


                return quey;

            }
            catch { throw; }
        }
        [Route("[action]")]
        [HttpGet]
        public IEnumerable<Issue> GetAllRequestOrderByStatus()
        {
            try
            {
                IEnumerable<Issue> quey = _context.Issues.Select(p => new Issue
                {
                    IssueId = p.IssueId,
                    Report = p.Report,
                    Idsupporter = p.Idsupporter,
                    Clasification = p.Clasification,
                    Status = p.Status,
                    Register = p.Register
                }).OrderByDescending(a => a.Status).ToList();


                return quey;

            }
            catch { throw; }
        }

        [Route("[action]/{IdSupporter}")]
        [HttpGet]
        public IEnumerable<Issue> GetAllRequestById(int IdSupporter)
        {
            try
            {
                IEnumerable<Issue> quey = _context.Issues.Select(p => new Issue
                {
                    IssueId = p.IssueId,
                    Report = p.Report,
                    Idsupporter = p.Idsupporter,
                    Clasification = p.Clasification,
                    Status = p.Status,
                    Register = p.Register
                }).Where(id=>id.Idsupporter == IdSupporter).OrderByDescending(a => a.Register).ToList();


                return quey;

            }
            catch { throw; }
        }


        // GET: api/Issue/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Issue>> GetIssue(int id)
        {
            var issue = await _context.Issues.FindAsync(id);

            if (issue == null)
            {
                return NotFound();
            }

            return issue;
        }

        // PUT: api/Issue/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIssue(int id, Issue issue)
        {
            if (id != issue.IssueId)
            {
                return BadRequest();
            }

            _context.Entry(issue).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IssueExists(id))
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
    
        /*Update Status ISSUE*/

        [Route("[action]/{issueId}/{status}/{usermodification}")]
        [HttpGet]
        public IActionResult SP_UpdateStatusIssue(int IssueId, string status, string usermodification)
        {
            try
            {

                var result = _context.Database.ExecuteSqlRaw("SP_UpdateStatusIssue {0}, {1}, {2}",
                                IssueId,
                               status,
                               usermodification
                           );
                if (result == 0)
                {
                    return null;
                }

                return Ok(result);

            }
            catch { throw; }
        }

        [Route("[action]/{issueId}/{clasification}/{usermodification}")]
        [HttpGet]
        public IActionResult SP_UpdateClasificationIssue(int IssueId, string clasification, string usermodification)
        {
            try
            {

                var result = _context.Database.ExecuteSqlRaw("SP_UpdateClasificationIssue {0}, {1}, {2}",
                                IssueId,
                               clasification,
                               usermodification
                           );
                if (result == 0)
                {
                    return null;
                }

                return Ok(result);

            }
            catch { throw; }
        }


        [Route("[action]/{issueId}/{supportusertassigned}/{usermodification}")]
        [HttpGet]
        public IActionResult SP_UpdateIdSupporterIssue(int IssueId, int supportusertassigned, string usermodification)
        {
            try
            {

                var result = _context.Database.ExecuteSqlRaw("SP_UpdateIdSupporterIssue {0}, {1}, {2}",
                                IssueId,
                               supportusertassigned,
                               usermodification
                           );
                if (result == 0)
                {
                    return null;
                }

                return Ok(result);

            }
            catch { throw; }
        }


        // POST: api/Issue
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<Issue>> PostIssue(Issue issue)
        {
  
            issue.Creationdate = DateTime.Parse(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss"));
            issue.Register = DateTime.Parse(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss"));
            _context.Issues.Add(issue);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIssue", new { id = issue.IssueId }, issue);
        }

        // DELETE: api/Issue/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Issue>> DeleteIssue(int id)
        {
            var issue = await _context.Issues.FindAsync(id);
            if (issue == null)
            {
                return NotFound();
            }

            _context.Issues.Remove(issue);
            await _context.SaveChangesAsync();

            return issue;
        }

        private bool IssueExists(int id)
        {
            return _context.Issues.Any(e => e.IssueId == id);
        }
    }
}
