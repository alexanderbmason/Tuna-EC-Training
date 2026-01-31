import './Section.css'

function OfficeHours() {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Office Hours - January 28, 2026</h2>
          <div style={{ marginTop: '2rem' }}>
            <video 
              controls 
              style={{ 
                width: '100%', 
                maxWidth: '800px', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <source src="/Tuna-EC-Training/tunaoh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficeHours
