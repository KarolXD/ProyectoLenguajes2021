﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_TeleAtlantico.Models
{
    public class Comment
    {
        public Comment()
        {
        }
        public int comment_id { get; set; }
        public string description { get; set; }
        public int issue_id { get; set; }
        public string usercreation { get; set; }


        public DateTime comment { get; set; }

        public int isuser { get; set; }
        public string typeuser { get; set; }


       
    }
}
