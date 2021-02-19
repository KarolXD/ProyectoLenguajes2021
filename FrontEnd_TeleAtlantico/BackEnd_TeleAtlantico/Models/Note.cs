using System;
using System.Collections.Generic;

#nullable disable

namespace BackEnd_TeleAtlantico.Models
{
    public partial class Note
    {
        public int IdNote { get; set; }
        public string Name { get; set; }
        public DateTime? NoteTime { get; set; }
        public int? IssueId { get; set; }
        public int? IsUserSu { get; set; }
        public string TypeUser { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }

        public virtual Issue Issue { get; set; }
    }
}
