using Microsoft.EntityFrameworkCore;

namespace DoctorAPI.Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Doctor> Doctors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>().Property(i => i.Id).ValueGeneratedNever();
            modelBuilder.Entity<Doctor>().Property(i => i.Id).ValueGeneratedNever();

        }
    }
}
