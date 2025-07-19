
function AboutPage () {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>ABOUT THE PROJECT</h1>
      <h3 style={{color: "grey"}}>
        DESCRIPTION: This project is a web application built by students as part of their coursework.
      </h3>

      <h2 style={{color: "grey"}}>Meet the Team</h2>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
        background: '#f3ebebff'
      }}>
        <h3 style={{ color: "grey"}}>Thathsara Abayawardana</h3>


      </div>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
        background: '#f3ebebff'
      }}>
        <h3 style={{ color: "grey"}}>Noemí Mira</h3>
        <a href="https://github.com/NMN-germany" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px'}}>GitHub</a>
        <a href="https://www.linkedin.com/in/noemi-mira-navarro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default AboutPage;
