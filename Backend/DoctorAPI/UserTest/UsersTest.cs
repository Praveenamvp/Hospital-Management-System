
using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace UserInternTest
{
    [TestClass]

    public class UserTest
    {
        public DbContextOptions<Context> GetDbContextOption()
        {
            var contextOptions = new DbContextOptionsBuilder<Context>()
                                                .UseInMemoryDatabase(databaseName: "userInMemory")
                                                .Options;
            return contextOptions;
        }
        public async void Add()
        {
            using (var userContext = new Context(GetDbContextOption()))
            {

                userContext.Doctors.Add(new Doctor
                {
                    FirstName = "Gimu G",
                                          LastName ="Sam",
                                       Phone = "9876543210",
                                            DateOfBirth = new DateTime(2001, 02, 14),
                                            Age = 22,
                                            Email = "gimu@gmail.com",
                                         Gender = "Male",
                                          LicenseNumber = "1234576854",
                                         Specialization="hear",
                                          Status = "NotApproved",
                    User = new User() { PasswordHash = new byte[] { }, PasswordKey = new byte[] { }, Role = "Intern" },
                });
                await userContext.SaveChangesAsync();

            }
           
        }
       
    }
}