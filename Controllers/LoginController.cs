using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HCSAngularApp.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
          [HttpGet("[action]")]
        public IEnumerable<string> Auth()
        {
            return new string[]{"true","login success"};

        }
    }
}
