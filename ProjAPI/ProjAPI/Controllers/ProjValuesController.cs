using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjAPI.Data;
using System;



namespace ProjAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjValuesController : ControllerBase
    {

        private readonly DataContext _context;
        public ProjValuesController(DataContext context)
        {
            _context = context;
        }



        //[HttpGet]
        //public async Task<ActionResult<List<Person>>> GetPerson()
        //{

        //    return Ok(await _context.Persons.ToListAsync());

        //}

        [HttpGet]
        public async Task<ActionResult<List<Person>>> GetPerson()
        {
            var persons = await _context.Persons.ToListAsync();
            return Ok(persons);
        }

        [HttpGet("personId")]
        public async Task<ActionResult<List<Vaccination>>> GetVaccinationByPersonId(int personId)
        {
            return Ok(await _context.Vaccination
                    .Where(v => v.Person_id == personId)
                    .ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Person>>> CreatePerson([FromBody] Person person)
        {
            _context.Persons.Add(person);
            await _context.SaveChangesAsync();
            return Ok(await _context.Persons.ToListAsync());
        }

        [Route("vaccination")]
        [HttpPost]
        public async Task<ActionResult<List<Vaccination>>> CreateVaccine([FromBody] Vaccination vaccination)
        {
            _context.Vaccination.Add(vaccination);
            await _context.SaveChangesAsync();
            return Ok(await _context.Vaccination.ToListAsync());
        }


    }
}
