import './Section.css'

function ComparisonQuestions() {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Comparison Questions</h2>
          <ul className="bullet-list">
            <li>
              <strong>Which response is better overall?</strong>
              <br />
              Your holistic judgment based on correctness, usefulness, and readiness to move forward.
            </li>
            <li>
              <strong>Which code has better naming and clarity?</strong>
              <br />
              If no code is written, judge clarity of explanations and proposed changes.
            </li>
            <li>
              <strong>Which code has better organization and modularity?</strong>
              <br />
              Logical structure, separation of concerns, and scalability.
            </li>
            <li>
              <strong>Which code has better error handling and robustness?</strong>
              <br />
              Anticipation of edge cases, diagnostics, and failure modes.
            </li>
            <li>
              <strong>Which code has better comments and documentation?</strong>
              <br />
              Useful explanations without unnecessary verbosity.
            </li>
            <li>
              <strong>Which code is more ready for review or merge?</strong>
              <br />
              Completeness, minimal remaining gaps, and reviewability.
            </li>
            <li>
              <strong>Which code has better logic and correctness?</strong>
              <br />
              Sound reasoning and alignment with the task requirements.
            </li>
            <li>
              <strong>Which response is more honest about what it actually did?</strong>
              <br />
              Clear distinction between implemented work and proposals.
            </li>
            <li>
              <strong>Which response follows the instructions better?</strong>
              <br />
              Full adherence to user and system constraints.
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ComparisonQuestions
