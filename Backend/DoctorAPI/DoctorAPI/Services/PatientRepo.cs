using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace DoctorAPI.Services
{
    public class PatientRepo : IRepo<int, Patient>
    {
        private readonly Context _context;
        private readonly ILogger<PatientRepo> _logger;

        public PatientRepo(Context context, ILogger<PatientRepo> logger) {
            _context = context;
            _logger= logger;
        }
        public async Task<Patient?> Add(Patient item)
        {
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Patient");

                    _context.Patients.Add(item);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return item;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Patient");
                }
                return null;
            }
        }

        public async Task<Patient?> Delete(int key)
        {
            Patient patient = await Get(key);
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Patient");
                    _context.Patients.Remove(patient);
                    _context.Users.Remove(patient.User);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return patient;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Patient");
                }
                return null;
            }
        }

        public async Task<Patient?> Get(int key)
        {
            try
            {
                Patient patient = await _context.Patients.Include(u => u.User).FirstOrDefaultAsync(u => u.Id == key);
                return patient;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<ICollection<Patient>?> GetAll()
        {
            try
            {
                ICollection<Patient> patients = await _context.Patients.ToListAsync();
                return patients;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<Patient?> Update(Patient item)
        {
            Patient patient= await Get(item.Id);
            if(patient!= null) {
                patient.FirstName= item.FirstName;
                patient.LastName= item.LastName;
                patient.DateOfBirth= item.DateOfBirth;
                patient.Age= item.Age;
                patient.Address=item.Address;
                patient.PhoneNumber= item.PhoneNumber;
                patient.Email= item.Email;
                patient.BloodGroup= item.BloodGroup;
                await _context.SaveChangesAsync();
                return patient;

            }
            return null;
        }
    }
}
