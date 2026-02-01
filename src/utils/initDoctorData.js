export function initDemoDoctor() {
  const doctors = JSON.parse(localStorage.getItem("doctors"));

  // agar demo doctor pehle se nahi hai
  if (!doctors || doctors.length === 0) {
    localStorage.setItem(
      "doctors",
      JSON.stringify([
        {
          doctorId: "DOC-DEMO-001",
          email: "doctor@demo.com",
          password: "doctor123",
        },
      ])
    );
  }
}
