using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DoctorAPI.Services
{
    public class DoctorRepo : IRepo<int, Doctor>
    {
        private readonly Context _context;
        private readonly ILogger<DoctorRepo> _logger;

        public DoctorRepo(Context context, ILogger<DoctorRepo> logger) {
            _context = context;
            _logger= logger;
        }
        public async Task<Doctor?> Add(Doctor item)
        {
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Doctor");
                    
                    _context.Doctors.Add(item);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return item;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Doctor");
                }
                return null;
            }
        }

        public async Task<Doctor?> Delete(int key)
        {
            Doctor doctor=await Get(key);
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Doctor");
                    _context.Doctors.Remove(doctor);
                    _context.Users.Remove(doctor.User);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return doctor;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Doctor");
                }
                return null;
            }

        }

        public async Task<Doctor?> Get(int key)
        {

            try
            {
                Doctor doctor = await _context.Doctors.Include(u=>u.User).FirstOrDefaultAsync(u => u.Id == key);
                return doctor;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<ICollection<Doctor>?> GetAll()
        {
            try
            {
                ICollection<Doctor> doctor = await _context.Doctors.ToListAsync();
                return doctor;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<Doctor?> Update(Doctor item)
        {
            
            try
            {
                Doctor doctor = await Get(item.Id);
                if (doctor != null)
                {
                    doctor.FirstName= item.FirstName;
                    doctor.LastName= item.LastName;
                    doctor.DateOfBirth= item.DateOfBirth;
                    doctor.Email= item.Email;
                    doctor.Age= item.Age;
                    doctor.Gender= item.Gender;
                    doctor.Phone= item.Phone;
                    doctor.Address= item.Address;
                    doctor.Email=item.Email;
                    doctor.Status= item.Status;
                    doctor.Specialization= item.Specialization;
                    doctor.LicenseNumber = item.LicenseNumber;
                    item.Experience= item.Experience;
                    await _context.SaveChangesAsync();
                    return doctor;

                }
            }
            catch (Exception ex)
            {
                    _logger.LogError(ex.Message);
            }
            return null;

        }
    }
}
