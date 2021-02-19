using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.Models
{
    public class NoteUI
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



    }
}
