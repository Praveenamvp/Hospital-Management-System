using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DoctorAPI.Models
{
    public class Patient
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public User? User { get; set; }

        [MinLength(1,ErrorMessage="Enter the firstname correctly")]
        public string? FirstName { get; set; }
        [MinLength(1, ErrorMessage = "Enter the lastname correctly")]

        public string? LastName { get; set; }
       

        public DateTime DateOfBirth { get; set; }

        [Range(10,150,ErrorMessage ="Age is validation")]
        public int Age { get; set; }
        [MinLength(3, ErrorMessage = "Enter the lastname correctly")]

        public string? Gender { get; set; }
        [Required]
        public string? Address { get; set; }
        public string? PhoneNumber { get; set; }
        [EmailAddress(ErrorMessage = "Please enter the email correctly")]
        public string? Email { get; set; }
        [MinLength(1, ErrorMessage = "Enter the lastname correctly")]

        public string? BloodGroup { get; set; }


    }
}
