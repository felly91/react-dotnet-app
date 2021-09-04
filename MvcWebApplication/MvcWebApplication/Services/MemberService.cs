
using MvcWebApplication.Models;
using System.Linq;

namespace MvcWebApplication.Data

{
    public class MemberService
    {
        public void AddMember(Member member)
        {
           Data.Members.Add(member);
        }

        public void DeleteMember(int memberId)
        {
            var member = Data.Members.FirstOrDefault(x => x.Id == memberId);
            if (member != null)
            {
                Data.Members.Remove(member);
            }
        }
    }
}