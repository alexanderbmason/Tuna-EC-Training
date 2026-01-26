import { useState } from 'react'
import './Section.css'

function CollapsibleCard({ title, children, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={`card collapsible ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button 
        className="card-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <h3 className="card-title" style={{ fontSize: '1.1rem', margin: 0 }}>{title}</h3>
        <span className="card-toggle">
          {isExpanded ? '▼' : '▶'}
        </span>
      </button>
      {isExpanded && (
        <div className="card-content">
          {children}
        </div>
      )}
    </div>
  )
}

function AutomatedEvals() {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Automated Evals</h2>
          <p>
            Automated evaluations are run on your submissions to check for alignment in your <strong>qualitative feedback</strong> and <strong>numerical ratings</strong>. These checks help ensure consistency and quality in your evaluations.
          </p>
          <p className="note" style={{ marginTop: '1.5rem' }}>
            <strong>PLEASE NOTE:</strong> You will not be able to edit your submission on the Snorkel platform in response to any of the eval feedback. That being said, submissions can still be accepted even with eval flags, so do not panic if you see them. Please try to just use them as feedback for your future submissions.
          </p>
        </div>

        <div className="card">
          <h3 className="subsection-title">Feedback-Rating Alignment Checker</h3>
          <p>
            This checker ensures that your numerical ratings (1-8 scale) match your written feedback. If you describe both responses as having similar strengths and weaknesses, your ratings should reflect that similarity. For example, if both responses are described as equally good, the rating should be around 4 (tied), not 6 or 7 (strong preference for one).
          </p>
          <CollapsibleCard title="Example 1: Overall Rating Alignment" defaultExpanded={false}>
            <div style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', marginTop: '0.5rem' }}>
              <h4 style={{ marginTop: 0, color: '#dc2626' }}>Overall rating alignment: MAJOR MISALIGNMENT</h4>
              <p>
                The overall rating is 6 (strong B preference) but the qualitative feedback shows that both responses have nearly identical strengths and weaknesses.
              </p>
              
              <p><strong>Response A strengths:</strong> 'fully implements the requested JSON Schema validation functionality with a well-structured and modular design...demonstrates strong correctness and instruction adherence by compiling the code, running targeted tests, committing changes with clear messages, and producing the final archive artifact.'</p>
              
              <p><strong>Response B strengths:</strong> 'delivers a comprehensive, end-to-end implementation...closely follows the task requirements...demonstrates strong correctness, verification, and production readiness.'</p>
              
              <p>Both responses have the <strong>SAME two weaknesses</strong> with nearly identical descriptions:</p>
              <ul className="bullet-list">
                <li>Both are 'extremely long/verbose' making them 'harder to review quickly despite being functionally/technically correct/strong'</li>
                <li>Both exhibit 'overengineering' by going 'beyond the minimum explicitly/strictly required' and increasing 'complexity and review burden/maintenance burden'</li>
              </ul>
              
              <p>
                The feedback presents both responses as essentially equivalent in quality - both fully correct, both comprehensive, both production-ready, with the exact same flaws. This should correspond to a rating of 3-4 (essentially tied), not 6 (strong B preference). There is no substantive qualitative difference in the feedback that would justify such a strong preference for B.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="Example 2: Dimension-Specific Rating Alignment" defaultExpanded={false}>
            <div style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', marginTop: '0.5rem' }}>
              <h4 style={{ marginTop: 0, color: '#dc2626' }}>Dimension-specific rating alignment: MAJOR MISALIGNMENT</h4>
              <p>Multiple dimensions show misalignment:</p>
              
              <h4 style={{ marginTop: '1rem', color: '#dc2626' }}>1. Review Ready rating is 6 (strong B preference)</h4>
              <p>
                But both responses are described as production-ready. Response A 'demonstrates strong correctness...running targeted tests, committing changes with clear messages, and producing the final archive artifact.' Response B shows 'strong correctness, verification, and production readiness.' Both are described as functionally/technically correct/strong. There's no feedback suggesting B is significantly more review-ready than A.
              </p>
              
              <h4 style={{ marginTop: '1rem', color: '#dc2626' }}>2. Honesty rating is 7 (strong B preference)</h4>
              <p>
                But there is no feedback whatsoever about honesty, transparency, or acknowledgment of limitations for either response. This dimension is not addressed in the qualitative feedback at all.
              </p>
              
              <h4 style={{ marginTop: '1rem', color: '#dc2626' }}>3. Instruction Following rating is 7 (strong B preference)</h4>
              <p>
                But Response A is explicitly praised for 'strong correctness and instruction adherence' and 'fully implements the requested...as requested.' Response B 'closely follows the task requirements.' Both have identical 'overengineering' weaknesses noting they go beyond requirements. The feedback does not support B being dramatically better at following instructions.
              </p>
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="Example 3: Rationale Consistency" defaultExpanded={false}>
            <div style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', marginTop: '0.5rem' }}>
              <h4 style={{ marginTop: 0, color: '#dc2626' }}>Rationale consistency: MAJOR MISALIGNMENT</h4>
              <p>
                The rationale states 'Response B made more implementation progress, but both have similar major issues (tool errors, no browser testing, incomplete).' This rationale does not justify ratings of 7 (strong B preference) across nearly all dimensions.
              </p>
              <p>
                The rationale explicitly acknowledges that 'both have similar major issues,' which suggests the responses should be much closer in rating (perhaps 4-5 range). A rating of 7 indicates a strong, clear preference for B, but the rationale describes only incremental progress ('made more implementation progress') while emphasizing shared critical failures. The rationale is internally inconsistent with the strong ratings given.
              </p>
            </div>
          </CollapsibleCard>
        </div>

        <div className="card">
          <h3 className="subsection-title">Strengths/Weaknesses Contradiction Checker</h3>
          <p>
            This checker looks for contradictions in your feedback. For example, if you list "clear and concise code" as a strength but also mention "verbose and hard to read" as a weakness, that's a contradiction. Your strengths and weaknesses should not contradict each other.
          </p>
          <CollapsibleCard title="Example: Response A Contradiction" defaultExpanded={false}>
            <div style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', marginTop: '0.5rem' }}>
              <h4 style={{ marginTop: 0, color: '#dc2626' }}>Response A strengths/weaknesses consistency: CONTRADICTION FOUND</h4>
              <p>
                The strengths praise Response A for being concise and well-organized, stating 'Following the "no markdown" instruction was handled cleanly, just used caps for headers instead of getting fancy' and 'The breakdown per test made sense even if a bit repetitive'.
              </p>
              <p>
                However, the weakness 'verbose' directly criticizes the response for being bloated and overly long, stating 'The response is bloated. Five separate test explanations when three of them...all fail for the same reason...Could've said "these three tests all need Stream.test() implemented, here's what it needs to do" instead of repeating the pattern three times. The whole thing could've been half the length.'
              </p>
              <p>
                These are contradictory because the strengths acknowledge the response is 'a bit repetitive' but frame it neutrally as the breakdown still 'made sense', while the weakness strongly criticizes this same repetitiveness as verbose bloat that made the response unnecessarily long. The strength implicitly accepts the structure while the weakness condemns it as a major flaw.
              </p>
            </div>
          </CollapsibleCard>
        </div>

        <div className="card">
          <h3 className="subsection-title">Response Feedback Grounding Checker</h3>
          <p>
            This checker verifies that the strengths and weaknesses you identify for Response A and Response B are actually present in the responses themselves. Your feedback should be based on what the model actually did, not assumptions or what you think it might have meant to do.
          </p>
          <CollapsibleCard title="Example: Ungrounded Weakness Claim" defaultExpanded={false}>
            <div style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', marginTop: '0.5rem' }}>
              <h4 style={{ marginTop: 0, color: '#dc2626' }}>Weaknesses grounded in response: The first weakness is NOT grounded in the actual response</h4>
              
              <h4 style={{ marginTop: '1rem', color: '#dc2626' }}>UNGROUNDED CLAIM:</h4>
              <ul className="bullet-list">
                <li><strong>Type:</strong> Weakness</li>
                <li><strong>Claim:</strong> 'CLI commands use "sticky-enable" format instead of "sticky enable" (subcommand format) as specified in the prompt'</li>
                <li><strong>Issue:</strong> Fabricated/Misrepresented</li>
                <li><strong>Explanation:</strong> Looking at the actual code in Response B, the CLI implementation shows <code>StickyEnable</code>, <code>StickyDisable</code>, <code>StickyToggle</code> as enum variants in the SubCommand enum. The changelog mentions usage as 'komorebic sticky-enable' but this appears to be a documentation error. The actual code structure uses the standard Clap subcommand pattern where enum variants translate to kebab-case by default. The implementation is consistent with other commands in the same file (e.g., 'Manage', 'Unmanage'). Without seeing the actual command-line parsing behavior or testing, this criticism about the format is not clearly observable in the code itself.</li>
              </ul>

              <h4 style={{ marginTop: '1.5rem', color: '#059669' }}>Regarding the other two weaknesses:</h4>
              
              <p><strong>2. 'verification: No mention of ensuring zero warnings or compilation testing'</strong> - This is <strong>GROUNDED</strong>. The response does not show any cargo clippy checks or compilation verification, though the prompt required 'zero warnings (cargo clippy -D warnings)'.</p>
              
              <p><strong>3. 'instruction_following: The prompt specified specific handling for tiled vs floating windows'</strong> - This is <strong>GROUNDED</strong>. The prompt explicitly required different handling: 'Tiled windows: ensure a sticky tiled window appears exactly once per target workspace (guard against duplicates by handle)' and 'Floating windows: draw/overlay at current rect on each workspace'. The response's implementation in <code>load_focused_workspace_with_sticky()</code> does not distinguish between tiled and floating windows or implement the specific logic requested for each type.</p>
            </div>
          </CollapsibleCard>
        </div>
      </div>
    </div>
  )
}

export default AutomatedEvals
