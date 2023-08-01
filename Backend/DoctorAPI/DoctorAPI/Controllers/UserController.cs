using DoctorAPI.Interfaces;
using DoctorAPI.Models;
using DoctorAPI.Models.DTO;
using DoctorAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DoctorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AngularCORS")]

    public class UserController : ControllerBase
    {
        private readonly IDoctorService _doctorService;
        private readonly IPatientService _patientService;
        private readonly IManageService _manageService;

        public UserController(IDoctorService doctorService,IPatientService patientService,IManageService manageService) { 
            _doctorService= doctorService;
            _patientService= patientService;
            _manageService= manageService;
        }
        [HttpPost("AddDoctor")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<DoctorDTO>> AddProductDetails(DoctorDTO doctorDetail)
        {
            var doctor = await _doctorService.AddDoctor(doctorDetail);
            if (doctor != null)
            {
                return Created("Doctor", doctor);
            }
            return BadRequest(new Error(2, "Doctor Details not added "));


        }
        [HttpPost("AddPatient")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<DoctorDTO>> AddPatintDetails(PatientDTO patientDTO)
        {
            var patient = await _patientService.AddPatient(patientDTO);
            if (patient != null)
            {
                return Created("Patient", patient);
            }
            return BadRequest(new Error(2, "Patient Details not added "));

        }
        [HttpPost("AddAdmin")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<DoctorDTO>> AddAdminDetails(UserDTO userDTO)
        {
            var user = await _manageService.AddAdmin(userDTO);
            if (user != null)
            {
                return Created("User", user);
            }
            return BadRequest(new Error(2, "User Details not added "));

        }
        [Authorize(Roles ="admin")]
        [HttpPut("Approvedisapprovedoctor")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ApproveDoctor(UpdateDoctorDTO updateDTO)
        {
            var patient = await _doctorService.ApproveDoctor(updateDTO);
            if (patient)
            {
                return Accepted("Approved Doctor Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Approve Doctor "));

        }
       [Authorize(Roles = "admin")]
        [HttpGet("GetAllDoctors")]
        [ProducesResponseType(typeof(ICollection<Doctor>), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Doctor>> GetAllDoctorsDetails()
        {
            ICollection<Doctor> users = await _doctorService.GetAllDoctors();
            if (users != null)
            {
                return Ok(users);
            }
            return NotFound(new Error(1, "No Doctor Details Currently"));

        }
        [Authorize]
        [HttpGet("GetAllApprovedDoctors")]
        [ProducesResponseType(typeof(ICollection<Doctor>), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Doctor>> GetAllApprovedDoctors()
        {
            ICollection<Doctor> users = await _doctorService.GetAllApprovedDoctors();
            if (users != null)
            {
                return Ok(users);
            }
            return NotFound(new Error(1, "No Doctor Details Currently"));

        }
        [Authorize]
        [HttpGet("GetAllPatients")]
        [ProducesResponseType(typeof(ICollection<Patient>), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Patient>> GetAllPatinetDetails()
        {
            ICollection<Patient> users = await _patientService.GetAllDPatients();
            if (users != null)
            {
                return Ok(users);
            }
            return NotFound(new Error(1, "No Patient Details Currently"));

        }
        [Authorize(Roles ="admin")]

        [HttpDelete("DeleteUser")]
        [ProducesResponseType(StatusCodes. Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeletePatient(IdDTO key)
        {
            var user = await _manageService.DeleteUser(key);
            if (user)
            {
                return Accepted("Deleted user Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Details Details of this user"));

        }
            [HttpPost("LoginUser")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
            public async Task<ActionResult<UserDTO>>  LoginUser(UserDTO key)
            {
                var user = await _manageService.LoginUser(key);
                if (user!=null)
                {
                    return Ok(user);
                }
                return BadRequest(new Error(2, "Login UnSuccessfull"));

            }
        [Authorize]

        [HttpPut("UpdateUserPassword")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UserDTO>> UpdateUserPassword(UserDTO key)
        {
            var patient = await _manageService.UpdateUserPassword(key);
            if (patient != null)
            {
                return Accepted("Updated User Password Successfull");
            }
            return BadRequest(new Error(2, "Update User Password UnSuccessfull"));

        }
        [HttpPut("UpdateDoctorDetails")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdateDoctorDetails(Doctor doctordata)
        {
            var doctor = await _doctorService.UpdateDoctor(doctordata);
            if (doctor)
            {
                return Accepted("Update Doctor Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Update Doctor "));

        }
        [Authorize(Roles = "patient")]
        [HttpPut("UpdatePatientDetails")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdatePatientDetails(Patient patientData)
        {
            var patient = await _patientService.UpdatePatient(patientData);
            if (patient)
            {
                return Accepted("Update Patient Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Update Patient "));

        }
        [HttpPost("GetSingleDoctor")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Doctor>> SingleDoctor(IdDTO key)
        {
            var user = await _doctorService.GetSingleDocter(key);
            if (user != null)
            {
                return Ok(user);
            }
            return BadRequest(new Error(2, "Get Single Doctor was unsuccessfull"));

        }
        [Authorize]
        [HttpPost("GetSinglePatient")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Doctor>> SinglePatient(IdDTO key)
        {
            var user = await _patientService.GetSinglePatient(key);
            if (user != null)
            {
                return Ok(user);
            }
            return BadRequest(new Error(2, "Get Single Patient was unsuccessfull"));

        }



    }
}
