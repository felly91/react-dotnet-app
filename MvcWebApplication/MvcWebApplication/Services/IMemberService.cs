using MvcWebApplication.Models;
using System.Collections.Generic;

namespace MvcWebApplication.Services
{
    public interface IMemberService
    {
        List<Member> GetAllMembers();
        Member GetMemberById(int memberId);
        void UpdateMember(int memberId, Member member);
        void DeleteMember(int memberId);
        void AddMember(Member member);
    }
}
