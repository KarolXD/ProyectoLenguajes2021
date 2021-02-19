using System;
using System.Collections.Generic;

#nullable disable

namespace BackEnd_TeleAtlantico.Models
{
    public partial class Supervisor
    {
        public Supervisor()
        {
            Supporters = new HashSet<Supporter>();
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

        public virtual ICollection<Supporter> Supporters { get; set; }
    }
}
