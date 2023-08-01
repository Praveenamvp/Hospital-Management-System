using DoctorAPI.Models;
using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface IManageService
    {
        public Task<UserDTO> LoginUser(UserDTO user);
        public Task<bool> DeleteUser(IdDTO key);

        public Task<UserDTO> UpdateUserPassword(UserDTO user);
        public Task<UserDTO> AddAdmin(UserDTO user);
       

    }
}
