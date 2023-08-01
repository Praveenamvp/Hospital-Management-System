using System.ComponentModel.DataAnnotations;

namespace DoctorAPI.Models.DTO
{
    public class DoctorDTO:Doctor
    {
        [Required(ErrorMessage ="Password is required")]
        public string? PasswordString { get; set; }

    }
}
