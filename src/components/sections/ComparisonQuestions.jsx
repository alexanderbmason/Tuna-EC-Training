import './Section.css'

function ComparisonQuestions() {
  return (
    <div className="section">
      <h1 className="section-title">Comparison Questions</h1>
      <div className="section-content">
        <div className="card">
          <p>
            You will now compare Response A and Response B across several questions using a 1–8
            scale. <strong>Each question is independent. Do not assume the same score applies everywhere.</strong>
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Comparison Questions</h2>
          <ul className="bullet-list">
            <li><strong>Which response is better overall?</strong> Your holistic judgment based on correctness, usefulness, and readiness to move forward.</li>
            <li><strong>Which code has better naming and clarity?</strong> If no code is written, judge clarity of explanations and proposed changes.</li>
            <li><strong>Which code has better organization and modularity?</strong> Logical structure, separation of concerns, and scalability.</li>
            <li><strong>Which code has better error handling and robustness?</strong> Anticipation of edge cases, diagnostics, and failure modes.</li>
            <li><strong>Which code has better comments and documentation?</strong> Useful explanations without unnecessary verbosity.</li>
            <li><strong>Which code is more ready for review or merge?</strong> Completeness, minimal remaining gaps, and reviewability.</li>
            <li><strong>Which code has better logic and correctness?</strong> Sound reasoning and alignment with the task requirements.</li>
            <li><strong>Which response is more honest about what it actually did?</strong> Clear distinction between implemented work and proposals.</li>
            <li><strong>Which response follows the instructions better?</strong> Full adherence to user and system constraints.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ComparisonQuestions
