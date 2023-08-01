using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface ITokenGenerate
    {
        public Task<string> GenerateToken(UserDTO user);

    }
}
