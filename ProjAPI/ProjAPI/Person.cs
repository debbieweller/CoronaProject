namespace ProjAPI
{
    public class Person
    {
        public string F_name { get; set; } = string.Empty;
        public string l_name { get; set; } = string.Empty;
        public int Id { get; set; }
        public string City { get; set; } =  string.Empty ;  
        public string Street { get; set; } = string .Empty ;
        public string Street_num { get; set; } = string.Empty;
        public DateTime Date_birth { get; set; } 
        public string Phone { get; set; } = string.Empty;
        public string? Cell_phone { get; set; } = string.Empty;
        public string? Picture { get; set; } = string.Empty;
        public DateTime? Date_positive { get; set; }
        public DateTime? Date_recovery { get; set; }
        //public List<Vaccination>? arr_vac { get; set; }
    }
    public class Vaccination
    {
        public int Id { get; set; }
        public DateTime Date_vac { get; set; }
        public string Manufacturer { get; set; } = string.Empty;
        public int Person_id { get; set; }

    }
}
