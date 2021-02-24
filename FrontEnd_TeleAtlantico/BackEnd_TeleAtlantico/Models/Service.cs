using System;
using System.Collections.Generic;

#nullable disable

namespace BackEnd_TeleAtlantico.Models
{
    public partial class Service
    {
        public Service()
        {
            Issues = new HashSet<Issue>();
            ServiceSupporters = new HashSet<ServiceSupporter>();
        }

        public int IdService { get; set; }
        public string Name { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }

        public virtual ICollection<Issue> Issues { get; set; }
        public virtual ICollection<ServiceSupporter> ServiceSupporters { get; set; }
    }
}
