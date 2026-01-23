import './Section.css'

function BestPractices({ setActiveSection }) {
  return (
    <div className="section">
      <h1 className="section-title">Best Practices</h1>
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Final Guidance</h2>
          <p>Follow these key principles when evaluating responses:</p>
          <ul className="bullet-list">
            <li><strong>Judge observable behavior only</strong> - Base your evaluations on what the responses actually did, not on assumptions or inferred intent.</li>
            <li><strong>Penalize misleading or false claims</strong> - If a response claims to do something but doesn't actually do it, that's a significant weakness.</li>
            <li><strong>Accuracy and depth matter more than polish</strong> - A technically correct but less polished response is better than a polished but incorrect one.</li>
            <li><strong>Justify your evaluations</strong> - If your evaluations are clearly justified by what the responses actually did, you are completing the task correctly.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title">Evaluation Best Practices</h2>
          <ul className="bullet-list">
            <li>Take your time to thoroughly read and understand both responses</li>
            <li>Compare responses side-by-side when possible</li>
            <li>Look for concrete evidence to support your judgments</li>
            <li>Be consistent in your application of weakness categories</li>
            <li>Provide clear explanations that reference specific parts of the responses</li>
            <li>Don't penalize responses for things they didn't claim to do</li>
            <li>Consider the context and requirements of the task when making judgments</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title">Common Pitfalls to Avoid</h2>
          <ul className="bullet-list">
            <li>Don't infer intent - only evaluate what's actually present in the response</li>
            <li>Don't assume both responses are equally flawed - make a relative judgment</li>
            <li>Don't focus on style over substance - correctness matters more</li>
            <li>Don't skip the comparison step - even if both responses are good, one is likely better</li>
            <li>Don't repeat critiques unnecessarily in the additional comments section</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BestPractices
