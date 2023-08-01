using DoctorAPI.Models;
using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface IDoctorService
    {
        public Task<UserDTO> AddDoctor(DoctorDTO item);
        public Task<bool> ApproveDoctor(UpdateDoctorDTO item);
        public Task<ICollection<Doctor>> GetAllDoctors( );
        public Task<bool> UpdateDoctor(Doctor item);

        public Task<ICollection<Doctor>> GetAllApprovedDoctors();
        public Task<Doctor> GetSingleDocter(IdDTO key);






    }
}
