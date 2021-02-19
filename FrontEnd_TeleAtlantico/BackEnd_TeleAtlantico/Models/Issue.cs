using System;
using System.Collections.Generic;

#nullable disable

namespace BackEnd_TeleAtlantico.Models
{
    public partial class Issue
    {
        public Issue()
        {
            Notes = new HashSet<Note>();
        }

        public int IssueId { get; set; }
        public int? Report { get; set; }
        public string Clasification { get; set; }
        public string Status { get; set; }
        public DateTime? Register { get; set; }
        public string Resolution { get; set; }
        public int? Idsupporter { get; set; }
        public DateTime? Creationdate { get; set; }
        public DateTime? Modificationdate { get; set; }
        public string Usercreation { get; set; }
        public string Modificationsser { get; set; }

        public virtual Supporter IdsupporterNavigation { get; set; }
        public virtual ICollection<Note> Notes { get; set; }
    }
}
