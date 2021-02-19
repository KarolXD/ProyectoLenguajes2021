using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.Models
{
    public class SupervisorUI
    {
        public SupervisorUI()
        {
        }

        public SupervisorUI(int idSupervisor, string name, string firstSurname, string secondSurname, string email, string password, DateTime? creationDate, DateTime? modificationDate, string userCreation, string modificationUser)
        {
            IdSupervisor = idSupervisor;
            Name = name;
            FirstSurname = firstSurname;
            SecondSurname = secondSurname;
            Email = email;
            Password = password;
          
            CreationDate = creationDate;
            ModificationDate = modificationDate;
            UserCreation = userCreation;
            ModificationUser = modificationUser;
        }

        public int IdSupervisor { get; set; }
        public string Name { get; set; }
        public string FirstSurname { get; set; }
        public string SecondSurname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
       
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }

        public static implicit operator ActionResult(SupervisorUI v)
        {
            throw new NotImplementedException();
        }
    }
}
