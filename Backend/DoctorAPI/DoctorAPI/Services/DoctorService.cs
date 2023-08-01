using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;

namespace DoctorAPI.Services
{
    public class DoctorService : IDoctorService
    {
        private readonly IRepo<int, Doctor> _repo;
        private readonly ITokenGenerate _tokenGenerate;

        public DoctorService(IRepo<int, Doctor> doctorRepo,ITokenGenerate tokenGenerate)
        {
            _repo= doctorRepo;
            _tokenGenerate= tokenGenerate;
        }
        public async Task<UserDTO> AddDoctor(DoctorDTO item)
        {
            var hmac = new HMACSHA512();
            item.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(item.PasswordString ?? ""));
            item.User.PasswordKey = hmac.Key;
            item.Status = "notapproved";
            item.User.Role = "doctor";


            Doctor doctor =await _repo.Add( item);
            UserDTO user;
            if (doctor != null)
            {
                user = new UserDTO();
                user.UserId = doctor.User.UserId;
                user.Role = doctor.User.Role;
                user.Token =await _tokenGenerate.GenerateToken(user);
                return user;
            }
         
            return null;
        }

        public async Task<bool> ApproveDoctor(UpdateDoctorDTO updateDoctor)
        {
            Doctor doctorData = await _repo.Get(updateDoctor.Id);
            if(doctorData!=null)

            {
                doctorData.Status = updateDoctor.Status;

                Doctor doctor = await _repo.Update(doctorData);
                if (doctor != null)
                {
                    return true;
                }

            }
            
            return false;
        }

        public async Task<bool> DeleteDoctor(int key)
        {
            Doctor doctor= await _repo.Delete(key);
            if(doctor != null)
            {
                return true;
            }
            return false;
        }

        public async Task<ICollection<Doctor>> GetAllApprovedDoctors()
        {
            ICollection<Doctor> doctors = await _repo.GetAll();
            doctors=doctors.Where(u=>u.Status=="aproved".ToLower()).ToList();
            if (doctors != null)
            {
                return doctors;
            }
            return null;
        }

        public async Task<ICollection<Doctor>> GetAllDoctors()
        {
            ICollection<Doctor> doctors = await _repo.GetAll();
            if(doctors!=null)
            {
                return doctors;
            }
            return null; 

        }

        public async Task<Doctor> GetSingleDocter(IdDTO key)
        {
            Doctor doctor = await _repo.Get(key.UserId);
            doctor.User = null;
            if(doctor!=null)
            {
                return doctor;
            }
            return null;
        }

        public async Task<bool> UpdateDoctor(Doctor item)
        {
            Doctor doctor = await _repo.Update(item);
            if(doctor != null)
            {
                return true;
            }
            return false;
        }
    }
}
