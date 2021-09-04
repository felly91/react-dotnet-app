using MvcWebApplication.Models;
using MvcWebApplication.Services;
using Microsoft.AspNetCore.Mvc;
//using MvcWebApplication.Models;

namespace MvcWebApplication.Controllers
{

    [Route("api/[controller]")]
    public class MemberController : Controller
    {
        private IMemberService _service;
        public MemberController(IMemberService service)
        {
            _service = service;
        }

        [HttpPost("AddMember")]
        public IActionResult AddMember([FromBody] Member member)
        {
            if (member != null)
            {
                _service.AddMember(member);
            }
            return Ok();
        }

        [HttpGet("[action]")]
        public IActionResult GetMembers()
        {
            var allMembers = _service.GetAllMembers();
            return Ok(allMembers);
        }

        [HttpPut("UpdateMember/{id}")]
        public IActionResult UpdateMember(int id, [FromBody] Member member)
        {
            _service.UpdateMember(id, member);
            return Ok(member);
        }

        [HttpDelete("DeleteMember/{id}")]
        public IActionResult DeleteMember(int id)
        {
            _service.DeleteMember(id);
            return Ok();
        }

        [HttpGet("SingleMember/{id}")]
        public IActionResult GetMemberById(int id)
        {
            var member = _service.GetMemberById(id);
            return Ok(member);
        }
    }
}






