using System;
using System.Collections.Generic;

#nullable disable

namespace BackEnd_TeleAtlantico.Models
{
    public partial class Supporter
    {
        public Supporter()
        {
            Issues = new HashSet<Issue>();
            ServiceSupporters = new HashSet<ServiceSupporter>();
        }

        public int IdSupporter { get; set; }
        public string Name { get; set; }
        public string FirstSurname { get; set; }
        public string SecondSurname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? AsignedAsSupervisor { get; set; }
        public int? IdSupervisor { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }

        public virtual Supervisor IdSupervisorNavigation { get; set; }
        public virtual ICollection<Issue> Issues { get; set; }
        public virtual ICollection<ServiceSupporter> ServiceSupporters { get; set; }
    }
}
