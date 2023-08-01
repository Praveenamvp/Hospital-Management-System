using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorAPI.Models
{
    public class Doctor
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public User? User { get; set; }
        [Required]

        public string? FirstName { get; set; }
        [Required]
        public string? LastName { get; set; }
        [Required]

        public DateTime DateOfBirth { get; set; }
        [Range(0, 150, ErrorMessage = "Age must be between 0 and 100")]

        public int? Age { get; set; }

        public string? Gender { get; set; }
        [Required]

        public string? Phone { get; set; }
        [MinLength(4,ErrorMessage ="Enter the address corrrectly")]

        public string? Address { get; set
                ; }

        [EmailAddress(ErrorMessage = "Please enter the email correctly")]
        public string? Email { get; set; }
        public string? Specialization { get; set; }
        [Required]

        public string? LicenseNumber { get; set; }
        public string? Status { get; set; }
        [Required]

        public int Experience { get; set; }

    }
}
