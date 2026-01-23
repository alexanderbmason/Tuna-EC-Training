import './Section.css'

function QuickStart({ setActiveSection }) {
  return (
    <div className="section">
      <h1 className="section-title">Quick Start</h1>
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">High-Level Workflow</h2>
          <div className="workflow-diagram">
            <div className="workflow-step one-time">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-badge">One-time</div>
                <p>Take the Project Tuna assessment on the Snorkel platform</p>
                <p className="step-detail">(Tuna-Model-Review-Assessment)</p>
              </div>
            </div>

            <div className="workflow-arrow">↓</div>

            <div className="workflow-step one-time">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-badge">One-time</div>
                <p>Receive email alias</p>
                <p className="step-detail">This alias is what you will use to log in to the external tasking platform.</p>
              </div>
            </div>

            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <p>Go to <a href="https://feedback.anthropic.com/surveyor/prwriter_snorkel?email_login=true" target="_blank" rel="noopener noreferrer" className="link">the external platform</a> to create your task</p>
              </div>
            </div>

            <div className="workflow-arrow">↓</div>

            <div className="workflow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <p>Come back to <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" className="link">the Snorkel platform</a> to claim and finalize your task</p>
                <p className="step-detail">(Tuna-Submission-Review)</p>
              </div>
            </div>

            <div className="workflow-arrow">↓</div>

            <div className="workflow-step success">
              <div className="step-number">5</div>
              <div className="step-content">
                <p>Receive compensation!</p>
              </div>
            </div>

            <div className="workflow-arrow loop">↻</div>

            <div className="workflow-repeat">
              <p>Repeat steps 3-5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickStart
