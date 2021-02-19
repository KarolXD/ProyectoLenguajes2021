using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_TeleAtlantico.Models
{
    public class IssueSupporter
    {


        public int IssueId { get; set; }
        public int? Report { get; set; }
        public string Clasification { get; set; }
        public string Status { get; set; }
        public DateTime? Register { get; set; }
      
        public int? Idsupporter { get; set; }

        public string fullname { get; set; }
    }
}
