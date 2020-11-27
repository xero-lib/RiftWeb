using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

class MainClass {
  public static void Main (string[] args) {
    Console.WriteLine ("Hello World");
  }

  public static string GetVisitorIP(HttpContext context)
        {
            return IPtracker(context);
        }

        private static string IPtracker(HttpContext context)
        {
            string ip = string.Empty;
            ip = context.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ip))
            {
                ip = context.Request.ServerVariables["REMOTE_ADDR"];
            }

            if (ip.Contains(","))
            {
                string ipRegex = @"^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}$";
                string[] pollutedIP = ip.Split(',');
                foreach (string noiseSection in pollutedIP)
                {
                    string trimmedNoise = noiseSection.Trim();
                    if (Regex.IsMatch(trimmedNoise, ipRegex))
                    {
                        ip = trimmedNoise;
                        break;
                    }
                }

            }

            return ip;
        }


        public static void BlacklistIP(string ip, int banType)
        {
            IPBan(ip, banType);
        }

        private static void IPBan(string ip, int banType)
        {
            string[] IPandPort = ip.Split(':');
            using (SqlConnection connection = new SqlConnection())
            {
                string query = "insert into BannedIPs(BanDate,IPv4,PortNumber,Reason) values(@0, @1, @2, @3)";
                connection.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["blacklist"].ConnectionString;
                connection.Open();
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@0", DateTime.Now);
                command.Parameters.AddWithValue("@1", IPandPort[0]);
                command.Parameters.AddWithValue("@2", int.Parse(IPandPort[1]));
                command.Parameters.AddWithValue("@3", banType);
                command.ExecuteNonQuery();
                command.Dispose();
                connection.Close();
            }
        }
}
