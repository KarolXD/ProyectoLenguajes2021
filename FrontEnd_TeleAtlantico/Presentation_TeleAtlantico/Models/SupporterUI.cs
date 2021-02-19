using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.Models
{
    public class SupporterUI
    {
        public SupporterUI()
        {
        }

        public SupporterUI(int idSupporter, string name)
        {
            IdSupporter = idSupporter;
            Name = name;
        }
        public SupporterUI(int idSupporter, string name, string firstSurname, string secondSurname, string email, string password,int asignedAsSupervisor, int? idSupervisor, DateTime? creationDate, DateTime? modificationDate, string userCreation, string modificationUser)
        {
            IdSupporter = idSupporter;
            Name = name;
            FirstSurname = firstSurname;
            SecondSurname = secondSurname;
            Email = email;
            Password = password;
            AsignedAsSupervisor = asignedAsSupervisor;
            IdSupervisor = idSupervisor;
            CreationDate = creationDate;
            ModificationDate = modificationDate;
            UserCreation = userCreation;
            ModificationUser = modificationUser;
        }
     
        public int IdSupporter { get; set; }
        public string Name { get; set; }
        public string FirstSurname { get; set; }
        public string SecondSurname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Int64 AsignedAsSupervisor { get; set; }

        public int? IdSupervisor { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }

    }
}
