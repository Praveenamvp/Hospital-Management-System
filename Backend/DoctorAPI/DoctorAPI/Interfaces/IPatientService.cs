using DoctorAPI.Models;
using DoctorAPI.Models.DTO;

namespace DoctorAPI.Interfaces
{
    public interface IPatientService
    {
        public Task<UserDTO> AddPatient(PatientDTO item);

        public Task<ICollection<Patient>> GetAllDPatients();
        public Task<bool> UpdatePatient(Patient item);
        public Task<Patient> GetSinglePatient(IdDTO key);



    }
}
