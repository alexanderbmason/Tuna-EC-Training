import './Section.css'

function Overview({ setActiveSection }) {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Project Overview</h2>
          <p>
            Project Tuna asks you to evaluate two AI-generated responses to the same software
            engineering task. This task requires you
            to judge the quality, correctness, and utility of each response as if you were reviewing
            a real pull request.
          </p>
          <p>
            Your goal is to determine which response demonstrates a stronger approach and is more suitable for a real-world application.
          </p>
          <p className="note">
            <strong>Important:</strong> You are not reviewing tone, politeness, or writing style.
            You are evaluating substance, correctness, and execution quality.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">What You Are Evaluating</h2>
          <p>For each task, you will be given:</p>
          <ul className="bullet-list">
            <li>
              A task prompt
              <ul className="bullet-list">
                <li>Any previous prompts and responses as context</li>
              </ul>
            </li>
            <li>Two AI-generated responses (Response A and Response B)</li>
          </ul>
          <p>Your responsibility is to:</p>
          <ul className="bullet-list">
            <li>Read and understand both model responses</li>
            <li>Identify strengths and weaknesses in each response using standardized <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('weakness-categories'); }} className="link">weakness categories</a></li>
            <li>Make clear, justified comparative ratings between the two responses</li>
          </ul>
          <p className="note">
            <strong>Key Principle:</strong> All judgments must be based on observable behavior in the responses.
            Do not infer intent or speculate about what the model "meant to do."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Overview
