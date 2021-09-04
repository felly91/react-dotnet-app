using MvcWebApplication.Models;
using System;
using System.Collections.Generic;

namespace MvcWebApplication.Data

{
    public static class Data
    {
        public static List<Member> Members => allMembers;
        static List<Member> allMembers = new List<Member>()
        {
            new Member()
            {
                Id=1,
                Name="Charles",
                
            },
            new Member()
            {
                Id=2,
                Name="Aaron",
                
            },
            new Member()
            {
                Id=3,
                Name="Joan",
                 
            },
            new Member()
            {
                Id=4,
                Name="Maureen",
                
            },
            new Member()
            {
                Id=5,
                Name="CalistusA",
            },
            new Member()
            {
                Id=7,
                Name="Esther",
            }
        };
    }
}

