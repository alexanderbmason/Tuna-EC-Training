import './Section.css'

function Overview({ setActiveSection }) {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Project Overview</h2>
          <p>
            Project Tuna asks you to evaluate two AI-generated responses to the same software
            engineering task. Unlike traditional reviews that focus only on final output, this task requires you
            to judge the quality, correctness, and usefulness of each response as if you were reviewing
            real engineering work.
          </p>
          <p>
            Your goal is to determine which response demonstrates stronger technical judgment and is
            more suitable to move forward in a real pull request workflow.
          </p>
          <p className="note">
            <strong>Important:</strong> You are not reviewing tone, politeness, or writing style.
            You are evaluating substance, correctness, and execution quality.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">What You Are Evaluating</h2>
          <p>For each task, you will review:</p>
          <ul className="bullet-list">
            <li>A task prompt and any provided context</li>
            <li>Two AI-generated responses (Response A and Response B)</li>
          </ul>
          <p>Your responsibility is to:</p>
          <ul className="bullet-list">
            <li>Identify strengths and weaknesses in each response</li>
            <li>Apply standardized <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('weakness-categories'); }} className="link">weakness categories</a> when issues are present</li>
            <li>Make clear, justified comparisons between the two responses</li>
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
