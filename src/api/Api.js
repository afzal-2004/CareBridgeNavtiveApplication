import api from "./Instance.js";

class DataService {
  GetAllDoctorList() {
    return api.get(`/getDoctorlist`);
  }

  CustomerRegister(Payload) {
    return api.post(`/Register`, Payload);
  }
  CustomerLogin(Payload) {
    return api.post(`/Login`, Payload);
  }
  GetCustomerprofiledata() {
    return api.get(`/Userprofile`);
  }
  GetDoctorDetailsById(Id) {
    return api.get(`/getDoctorDetail/${Id}`);
  }
  BookAppointment(Doctorid, payload) {
    return api.post(`/AppointedDoctor/${Doctorid}`, payload);
  }
  GetAppointedDoctors() {
    return api.get(`/AccessAppointedDoctor`);
  }
  CancelBookedAppointment(id) {
    return api.delete(`/DeletedAppointedDoctor/${id}`);
  }
  CreateOrder(payload) {
    return api.post(`/create-order`, payload);
  }
  ToCheckPaymentStatus(payload) {
    return api.post(`verify-payment`, payload);
  }
}
export default new DataService();
