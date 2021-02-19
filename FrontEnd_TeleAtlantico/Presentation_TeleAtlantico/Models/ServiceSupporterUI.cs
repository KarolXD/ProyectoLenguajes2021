using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.Models
{
    public class ServiceSupporterUI
    {
        public ServiceSupporterUI()
        {
        }

        public ServiceSupporterUI(int idServiceSopport, int? idService, int? idSupporter, DateTime? creationDate, DateTime? modificationDate, string userCreation, string modificationUser)
        {
            IdServiceSopport = idServiceSopport;
            IdService = idService;
            IdSupporter = idSupporter;
            CreationDate = creationDate;
            ModificationDate = modificationDate;
            UserCreation = userCreation;
            ModificationUser = modificationUser;
        }

        public int IdServiceSopport { get; set; }
        public int? IdService { get; set; }
        public int? IdSupporter { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ModificationDate { get; set; }
        public string UserCreation { get; set; }
        public string ModificationUser { get; set; }

    }
}
