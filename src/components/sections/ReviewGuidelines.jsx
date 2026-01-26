import './Section.css'

function ReviewGuidelines() {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Review Guidelines</h2>
          <p>
            As a reviewer, you are responsible for evaluating other evaluators' submissions and deciding whether to accept or reject them. Your role is crucial in maintaining quality and consistency across all evaluations.
          </p>
        </div>

        <div className="card">
          <h3 className="subsection-title">Using Automated Eval Feedback</h3>
          <p>
            Automated evaluations provide helpful flags and feedback, but they should not be trusted blindly. Your judgment is essential in determining whether flagged issues are genuine problems or false positives.
          </p>
          <ul className="bullet-list">
            <li><strong>Evaluate authenticity:</strong> Review each automated eval flag carefully. Some flags may be incorrect or based on misunderstandings of the submission.</li>
            <li><strong>Assess severity:</strong> Not all violations are equal. Minor issues or somewhat subjective points can often be ignored, especially if the overall evaluation is thorough and accurate.</li>
            <li><strong>Use your judgment:</strong> If an automated eval flags something very minor or subjective, and the rest of the submission is strong, you can accept it despite the flag.</li>
            <li><strong>Don't reject automatically:</strong> The presence of automated eval flags does not automatically mean a submission should be rejected. Consider the context and severity.</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="subsection-title">Independent Review Process</h3>
          <p>
            Automated evals are a tool, not a replacement for your own review. You must conduct your own thorough evaluation of each submission.
          </p>
          <ul className="bullet-list">
            <li><strong>Review the prompt:</strong> Read the original task prompt to understand what was being evaluated.</li>
            <li><strong>Examine the code/responses:</strong> Look at the actual model responses (Response A and Response B) that were evaluated.</li>
            <li><strong>Evaluate ratings:</strong> Check whether the numerical ratings (1-8 scale) make sense given the responses.</li>
            <li><strong>Assess feedback quality:</strong> Read through the strengths, weaknesses, and rationale to ensure they are accurate and well-reasoned.</li>
            <li><strong>Cross-reference:</strong> Compare the automated eval feedback with your own assessment. If you find issues the evals didn't catch, or if you disagree with the evals, use your judgment.</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="subsection-title">Evaluating Feedback Quality</h3>
          <p>
            The quality and thoroughness of the evaluator's feedback is a critical factor in your review decision.
          </p>
          <ul className="bullet-list">
            <li><strong>Detail and specificity:</strong> Feedback should be detailed and specific, with concrete examples from the responses. Vague or generic feedback is not acceptable.</li>
            <li><strong>Thoroughness:</strong> Both strengths and weaknesses should be adequately addressed. Missing major issues or failing to identify clear strengths are red flags.</li>
            <li><strong>Accuracy:</strong> The feedback should accurately reflect what is actually present in the responses. Claims that don't match the actual content are grounds for rejection.</li>
            <li><strong>Rejection criteria:</strong> Reject submissions with very cursory, vague, or superficial feedback. Evaluators should demonstrate they've carefully read and analyzed the responses.</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="subsection-title">Providing Feedback to Submitters</h3>
          <p>
            Your review feedback helps evaluators improve their future submissions. Always provide constructive, actionable feedback.
          </p>
          <ul className="bullet-list">
            <li><strong>Be specific:</strong> Point out exactly what was wrong or what could be improved. Vague feedback like "needs work" is not helpful.</li>
            <li><strong>Be constructive:</strong> Explain why something is an issue and how it could be fixed. Help evaluators understand what good feedback looks like.</li>
            <li><strong>Highlight positives:</strong> If parts of the submission were good, mention them. This helps evaluators know what to continue doing.</li>
            <li><strong>Reference examples:</strong> When possible, point to specific parts of their submission or reference the automated eval feedback to make your points clear.</li>
            <li><strong>Focus on improvement:</strong> Frame feedback in terms of how to improve future submissions, not just what was wrong with this one.</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="subsection-title">Acceptance vs. Rejection Criteria</h3>
          <p>
            Use these guidelines to help determine whether a submission should be accepted or rejected:
          </p>
          <div style={{ backgroundColor: '#ecfdf5', borderLeft: '4px solid #10b981', padding: '1rem', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0, color: '#059669' }}>Accept if:</h4>
            <ul className="bullet-list">
              <li>The feedback is detailed, specific, and accurately reflects the responses</li>
              <li>Ratings align reasonably well with the qualitative feedback</li>
              <li>Any automated eval flags are minor, subjective, or appear to be false positives</li>
              <li>The evaluation demonstrates careful reading and thoughtful analysis</li>
              <li>Minor issues don't significantly impact the overall quality of the evaluation</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', marginTop: '1rem' }}>
            <h4 style={{ marginTop: 0, color: '#dc2626' }}>Reject if:</h4>
            <ul className="bullet-list">
              <li>The feedback is cursory, vague, or superficial</li>
              <li>Major misalignments exist between ratings and feedback that can't be explained</li>
              <li>Feedback contains clear contradictions or ungrounded claims</li>
              <li>Critical automated eval flags indicate serious issues that aren't addressed</li>
              <li>The evaluation shows evidence that the responses weren't carefully read</li>
              <li>Multiple significant issues suggest the evaluator didn't follow guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewGuidelines
