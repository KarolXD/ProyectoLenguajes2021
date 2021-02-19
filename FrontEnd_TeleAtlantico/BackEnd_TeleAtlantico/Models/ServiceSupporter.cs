using System;
using System.Collections.Generic;

#nullable disable

namespace BackEnd_TeleAtlantico.Models
{
    public partial class ServiceSupporter
    {
        public int IdServiceSopport { get; set; }
        public int? IdService { get; set; }
        public int? IdSupporter { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }

        public virtual Service IdServiceNavigation { get; set; }
        public virtual Supporter IdSupporterNavigation { get; set; }
    }
}
