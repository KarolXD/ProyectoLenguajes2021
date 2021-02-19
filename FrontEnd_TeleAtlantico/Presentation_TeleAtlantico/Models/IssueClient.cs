using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation_TeleAtlantico.Models
{
    public class IssueClient
    {

            

        public int issue_id { get; set; }
        public int report { get; set; }
        public string name { get; set; }
        public string firstsurname { get; set; }
        public string secondsurname { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public string secondcontact { get; set; }
        public string status { get; set; }
        public string contactemail { get; set; }
        public string contactphone { get; set; }

        public IssueClient() { }
        public IssueClient(int issue_id, int report, string name, string firstsurname, string secondsurname, string email, string phone, string address, string secondcontact, string status, string contactemail, string contactphone)
        {
            this.issue_id = issue_id;
            this.report = report;
            this.name = name;
            this.firstsurname = firstsurname;
            this.secondsurname = secondsurname;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.secondcontact = secondcontact;
            this.status = status;
            this.contactemail = contactemail;
            this.contactphone = contactphone;
        }

    }
}
