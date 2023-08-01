using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using System.Security.Cryptography;
using System.Text;

namespace DoctorAPI.Services
{
    public class PatientService : IPatientService
    {
        private readonly IRepo<int, Patient> _patientRepo;
        private readonly ITokenGenerate _tokenGenerate;

        public PatientService(IRepo<int,Patient> patientRepo,ITokenGenerate tokenGenerate) {
            _patientRepo = patientRepo;
            _tokenGenerate=tokenGenerate;
        }
        public async Task<UserDTO> AddPatient(PatientDTO item)
        {

            var hmac = new HMACSHA512();
            item.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(item.PasswordString ?? ""));
            item.User.PasswordKey = hmac.Key;
            item.User.Role = "patient";


            Patient patient = await _patientRepo.Add(item);
            UserDTO user;
            if (patient != null)
            {
                user = new UserDTO();
                user.UserId = patient.User.UserId;
                user.Role = patient.User.Role;
                user.Token = await _tokenGenerate.GenerateToken(user);
                return user;
            }

            return null;
        }

        public async Task<bool> DeletePatient(int key)
        {
            Patient  patient = await _patientRepo.Delete(key);
            if (patient != null)
            {
                return true;
            }
            return false;
        }

        public async Task<ICollection<Patient>> GetAllDPatients()
        {
            ICollection<Patient> patients= await _patientRepo.GetAll();
            if(patients!=null)
            {
                return patients;
            }
            return null;
        }

        public async Task<Patient> GetSinglePatient(IdDTO key)
        {
            Patient patient = await _patientRepo.Get(key.UserId);
            patient.User = null;
            if (patient != null)
            {
                return patient;
            }
            return null;
        }

        public async Task<bool> UpdatePatient(Patient item)
        {
            Patient patient = await _patientRepo.Update(item);
            if (patient != null)
            {
                return true;
            }
            return false;
        }
    }
}
