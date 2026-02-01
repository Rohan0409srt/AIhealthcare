import "../CSS/Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>AI-Based Real-Time Heart Disease Detection</h1>
        <p>
          Monitor ECG signals using Artificial Intelligence for early
          and accurate cardiovascular disease detection.
        </p>
      </section>

      {/* INFO SECTION */}
      <section className="about">
  <h2>About This Project</h2>

  <p className="about-intro">
    This project, titled <strong>AI-Based Real-Time Detection of Cardiovascular Diseases</strong>,
    is designed to continuously monitor ECG signals and identify heart-related
    abnormalities at an early stage using Artificial Intelligence.
  </p>

  <p>
    Cardiovascular diseases are one of the leading causes of death worldwide.
    Early detection plays a crucial role in preventing severe complications.
    This system analyzes ECG waveforms in real time and automatically detects
    abnormal heart conditions such as arrhythmia, helping doctors take timely
    medical action.
  </p>

  <h3>Features</h3>
  <ul>
    <li>To monitor ECG signals in real time</li>
    <li>To detect cardiovascular diseases using AI techniques</li>
    <li>To generate instant alerts for abnormal heart activity</li>
    <li>To support remote monitoring for doctors</li>
    <li>To improve early diagnosis and patient care</li>
  </ul>

  <h3>How the System Works</h3>
  <p>
    The system collects ECG data from sensors or datasets and processes it using
    Artificial Intelligence models. These models analyze ECG patterns and
    classify them as normal or abnormal. If an abnormal condition is detected,
    an alert is generated and displayed on the dashboard for doctors.
  </p>
  <h3>Who Can Use This System?</h3>
  <ul>
    <li><strong>Patients:</strong> To monitor heart health and receive early alerts</li>
    <li><strong>Doctors:</strong> To analyze ECG data and make timely decisions</li>
    <li><strong>Hospitals & Clinics:</strong> For remote cardiac monitoring</li>
    <li><strong>Students & Researchers:</strong> For AI-based healthcare studies</li>
  </ul>

  <h3>Future Scope</h3>
  <p>
    In the future, this system can be enhanced by integrating more advanced AI
    models, supporting additional heart conditions, and connecting with
    wearable devices for continuous monitoring.
  </p>
</section>


      <footer className="footer">
  <p>
    AI HeartCare is an AI-based real-time cardiovascular disease detection
    system designed for early diagnosis and continuous heart health monitoring.
  </p>
  © 2026 AI HeartCare | All Rights Reserved
</footer>

    </div>
  );
}

export default Home;
