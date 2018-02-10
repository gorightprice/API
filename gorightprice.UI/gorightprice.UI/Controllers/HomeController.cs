using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace gorightprice.UI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            string filePath = Server.MapPath("~/Views/Home/Index.html");
            if (System.IO.File.Exists(filePath))
            {
                return File(filePath, "text/html");
            }
            return View();
        }
     
    }
}
