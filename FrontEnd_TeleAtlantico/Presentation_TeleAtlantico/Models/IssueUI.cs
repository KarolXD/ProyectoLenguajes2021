using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.Models
{
    public class IssueUI
    {
        public IssueUI()
        {
        }

        public IssueUI(int issueId, int? report, string clasification, string status, DateTime? register, string resolution, int? idSupporter, DateTime? creationDate, DateTime? modificationDate, string userCreation, string modificationUser)
        {
            IssueId = issueId;
            Report = report;
            Clasification = clasification;
            Status = status;
            Register = register;
            Resolution = resolution;
            IdSupporter = idSupporter;
            CreationDate = creationDate;
            ModificationDate = modificationDate;
            UserCreation = userCreation;
            ModificationUser = modificationUser;
        }

        public int IssueId { get; set; }
        public int? Report { get; set; }
        public string Clasification { get; set; }
        public string Status { get; set; }
        public DateTime? Register { get; set; }
        public string Resolution { get; set; }
        public int? IdSupporter { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }
    }
}
