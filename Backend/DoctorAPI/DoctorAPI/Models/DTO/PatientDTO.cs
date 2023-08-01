using System.ComponentModel.DataAnnotations;

namespace DoctorAPI.Models.DTO
{
    public class PatientDTO:Patient
    {
        [Required(ErrorMessage ="Password string is required")]
        public string? PasswordString { get; set; }
    }
}
