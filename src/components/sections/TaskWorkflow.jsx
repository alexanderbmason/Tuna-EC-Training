import { useState } from 'react'
import './Section.css'
import anthropicWelcomeImage from '../../../images/Anthropic_welcome.png'
import ratingScaleImage from '../../../images/rating_scale.svg'
import capabilityCheckImage from '../../../images/capability_check.png'
import ratingsImage from '../../../images/ratings.png'
import responseA1Image from '../../../images/responseA_1.png'
import responseA2Image from '../../../images/responseA_2.png'
import responseB1Image from '../../../images/responseB_1.png'
import responseB2Image from '../../../images/responseB_2.png'
import sxs1Image from '../../../images/sxs1.png'
import sxs2Image from '../../../images/sxs2.png'
import platform1Image from '../../../images/platform1.png'
import platform2Image from '../../../images/platform2.png'
import platform3Image from '../../../images/platform3.png'
import platform4Image from '../../../images/platform4.png'

function CollapsibleCard({ title, children, defaultExpanded = false, nested = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={`card collapsible ${isExpanded ? 'expanded' : 'collapsed'} ${nested ? 'nested' : ''}`}>
      <button 
        className={`card-header ${nested ? 'nested-header' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <h2 className={`card-title ${nested ? 'nested-title' : ''}`}>{title}</h2>
        <span className={`card-toggle ${nested ? 'nested-toggle' : ''}`}>
          {isExpanded ? '▼' : '▶'}
        </span>
      </button>
      {isExpanded && (
        <div className={`card-content ${nested ? 'nested-content' : ''}`}>
          {children}
        </div>
      )}
    </div>
  )
}

function TaskWorkflow({ setActiveSection }) {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Video Walkthrough</h2>
          <p>
            Watch the video walkthrough to see the evaluation process in action:
          </p>
          <p>
            <a 
              href="https://www.loom.com/share/56d1157b51764db4bb80eb815960a83d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link">
              Video Walkthrough Link
            </a>
          </p>
        </div>

        <CollapsibleCard title="Step 1: Logging Into External Platform">
          <p>
            To begin tasking on the external platform, you'll receive an alias email address as a DM via Slack.
          </p>
          <p className="note-text"><strong>Note:</strong> If you have not received your alias, flag it to Connor Young.</p>
          <p>
            You will also have your personal email added to a Google Group. This Google Group is what allows you to receive the verification code to your personal email, you do not need to use it for anything.
          </p>
          <ol className="step-list">
            <li>
              Log in using your <strong>alias email</strong> at: <a href="https://feedback.anthropic.com/surveyor/prwriter_snorkel?email_login=true" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="link">
                https://feedback.anthropic.com/surveyor/prwriter_snorkel?email_login=true
              </a>
              <br />
              <span className="note-text">Do not use the option to log in with Google.</span>
            </li>
            <li>You'll receive an email verification code at your <strong>personal email</strong>. Enter that code to complete login and start tasking.</li>
          </ol>
          <p className="note">
            <strong>Note:</strong> If you get timed out on the platform and get error 409, please open the tool in
            incognito mode to keep working on the tasks or try to use the skip button to keep tasking.
          </p>
          <CollapsibleCard title="Visual" nested={true}>
            <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'auto' }}>
              <img src={anthropicWelcomeImage} alt="Anthropic Welcome Login Screen" style={{ display: 'block', width: 'auto', height: 'auto', maxWidth: 'none' }} />
            </div>
          </CollapsibleCard>
        </CollapsibleCard>

        <CollapsibleCard title="Step 2: Capability Check">
          <p>
            On your tasking UI, you will see a prompt and any preceding prompts and responses from the conversation trace. Everything besides the final prompt is just for context. <strong>The only prompt you will evaluate is the final one.</strong>
          </p>
          <p>
            First, confirm whether you can reasonably evaluate the task.
          </p>
          <p className="list-intro"><strong>Select "Yes, I can evaluate this task" if:</strong></p>
          <ul className="bullet-list">
            <li>The task prompt is understandable</li>
            <li>You are familiar with the programming language or domain</li>
          </ul>
          <p className="list-intro"><strong>Select "No – technical issues only" if:</strong></p>
          <ul className="bullet-list">
            <li>The task is fundamentally broken</li>
            <li>The task cannot be evaluated by anyone</li>
          </ul>
          <p className="list-follow-up"><strong>If you select No, you must clearly explain why the task could not be completed.</strong> Selecting No is equivalent to skipping the task, no payment is given in this case.</p>
          <p className="note" style={{ marginTop: '1.5rem' }}>
            <strong>NOTE:</strong> The task should be skipped if the final prompt does not result in code-based responses. If the responses are just plain text or explanations without actual code, then they should be skipped. We need actual code in the responses to evaluate.
          </p>
          <p className="note" style={{ marginTop: '1rem' }}>
            <strong>NOTE:</strong> You will not be able to access or download the original files referenced in the prompt (if any). You must do your best to evaluate the responses with the conversation trace provided.
          </p>
          <CollapsibleCard title="Visual" nested={true}>
            <div style={{ marginTop: '0.5rem' }}>
              <img src={capabilityCheckImage} alt="Step 2 Capability Check Interface" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </CollapsibleCard>
        </CollapsibleCard>

        <CollapsibleCard title="Step 3: Prompt Quality Rating (1–5)">
          <p>
            Next, rate the quality of the task prompt itself.
            This rating is only about the prompt, not the model responses.
          </p>
          <p><strong>Use the following scale:</strong></p>
          <div className="rating-scale">
            <div className="rating-item">
              <strong className="rating-poor">Poor (1–2): Impossible, missing inputs, or unnatural</strong>
              <ul className="bullet-list">
                <li>Asks for infrastructure the model can't access (e.g., deploy to AWS, set up CI)</li>
                <li>Missing required inputs (e.g., modify a codebase that wasn't provided)</li>
                <li>Unnatural or unrealistic request no real user would make</li>
                <li>Repeated/duplicate prompts in multi-turn conversations</li>
              </ul>
            </div>
            <div className="rating-item">
              <strong className="rating-adequate">Adequate (3): Doable but too simple or lacks context</strong>
              <ul className="bullet-list">
                <li>Simple tasks that don't challenge the model meaningfully</li>
                <li>Valid request but doesn't fit the conversation context</li>
                <li>Basic coding tasks anyone could do quickly</li>
              </ul>
            </div>
            <div className="rating-item">
              <strong className="rating-good">Good (4–5): Challenging, realistic, and representative</strong>
              <ul className="bullet-list">
                <li>Challenging tasks you'd give to an advanced model</li>
                <li>Natural, realistic requests a real user would make</li>
                <li>Doable with the tools/dependencies available</li>
                <li>Representative of actual Claude Code interactions</li>
              </ul>
            </div>
          </div>
          <CollapsibleCard title="Visual" nested={true}>
            <div style={{ marginTop: '0.5rem' }}>
              <img src={ratingsImage} alt="Step 3 Prompt Quality Rating Interface" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </CollapsibleCard>
        </CollapsibleCard>

        <CollapsibleCard title="Step 4: Evaluate Strengths and Weaknesses of Response A">
          <p>Evaluate the strengths and weaknesses of response A. Weaknesses are evaluated according to defined weakness categories (see below). Strength evaluation is free-form.</p>
          
          <p className="note" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <strong>NOTE:</strong> You are only evaluating the FINAL turn presented in Response A. You may see prior prompts and responses in the conversation, but this is just for context. Focus your evaluation on just the final prompt and response.
          </p>
          
          <h3 className="subsection-title">Strengths of Response A</h3>
          <p className="list-intro">Describe what the response does well. Focus on:</p>
          <ul className="bullet-list">
            <li>Correct understanding of the task</li>
            <li>Meaningful progress toward a solution</li>
            <li>Appropriate use of tools or assumptions</li>
            <li>Alignment between claims and actual work</li>
          </ul>

          <h3 className="subsection-title">Weaknesses of Response A</h3>
          <p className="list-intro">If applicable:</p>
          <ul className="bullet-list">
            <li>Select the relevant weakness categories (see below)</li>
            <li>Clearly explain each issue</li>
            <li>Reference observable evidence in the response</li>
          </ul>
          <p className="list-follow-up">If no weaknesses apply, state why.</p>
          
          <CollapsibleCard title="Weakness Categories" nested={true} defaultExpanded={false}>
            <p className="note-text" style={{ marginBottom: '1.5rem' }}>
              Select issues you observed. For each selected issue, provide specific examples.
            </p>
            
            <div className="weakness-categories-list">
              <div className="weakness-category">
                <div className="weakness-code">[INST]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Instruction Following Failures</strong>
                  <p className="weakness-description">Disregards explicit instructions from user or CLAUDE.md files.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[OVERENG]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Overengineering</strong>
                  <p className="weakness-description">Makes changes beyond what was requested; adds unrequested features.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[TOOL]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Tool Use Errors</strong>
                  <p className="weakness-description">Fails to invoke tools correctly or at all.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[LAZY]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Laziness</strong>
                  <p className="weakness-description">Doesn't complete tasks fully or gives up early.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[VERIFY]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Verification Failures</strong>
                  <p className="weakness-description">Fails to validate that changes work correctly.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[FALSE]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">False Claims of Success</strong>
                  <p className="weakness-description">Claims action was completed successfully when it was not.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[ROOT]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Fails to Address Root Cause</strong>
                  <p className="weakness-description">Addresses symptoms rather than root causes.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[DESTRUCT]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Unauthorized Destructive Operations</strong>
                  <p className="weakness-description">Attempts harmful or irreversible operations without permission.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[FILE]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">File-Related Issues</strong>
                  <p className="weakness-description">Creates unnecessary files or modifies wrong files.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[HALLUC]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Code Hallucinations</strong>
                  <p className="weakness-description">Invents functions, APIs, or libraries that don't exist.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[DOCS]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Documentation Issues</strong>
                  <p className="weakness-description">Creates unwanted documentation or bad comments.</p>
                </div>
              </div>

              <div className="weakness-category">
                <div className="weakness-code">[VERBOSE]</div>
                <div className="weakness-content">
                  <strong className="weakness-title">Verbose Dialogue / Formatting</strong>
                  <p className="weakness-description">Overly long responses, unnecessary formatting, or excessive markdown/emojis.</p>
                </div>
              </div>
            </div>
          </CollapsibleCard>
          <p className="note" style={{ marginTop: '1.5rem' }}>
            <strong>NOTE:</strong> Your strengths response must be at least 200 characters and your weakness additional comments must be at least 20 characters if no weakness is selected. You will not be able to proceed to the next step without meeting these requirements.
          </p>
          <CollapsibleCard title="Visual" nested={true}>
            <div style={{ marginTop: '0.5rem' }}>
              <img src={responseA1Image} alt="Response A Interface 1" style={{ display: 'block', width: '100%', height: 'auto', marginBottom: '1rem' }} />
              <img src={responseA2Image} alt="Response A Interface 2" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </CollapsibleCard>
        </CollapsibleCard>

        <CollapsibleCard title="Step 5: Evaluate Strengths and Weaknesses of Response B">
          <p>
            Repeat the same evaluation process used for Response A.
            Apply the same standards and level of scrutiny.
          </p>
          <CollapsibleCard title="Visual" nested={true}>
            <div style={{ marginTop: '0.5rem' }}>
              <img src={responseB1Image} alt="Response B Interface 1" style={{ display: 'block', width: '100%', height: 'auto', marginBottom: '1rem' }} />
              <img src={responseB2Image} alt="Response B Interface 2" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </CollapsibleCard>
        </CollapsibleCard>

        <CollapsibleCard title="Step 6: Compare Responses">
          <p>
            You will now compare Response A and Response B across several questions using a 1–8
            scale, where 1 indicates that model A is much better and 8 indicates that model B is much better. <strong>Each question is independent. Do not assume the same score applies everywhere.</strong>
          </p>
          <p>
            Review the comparison questions (see below) to understand what you'll be evaluating, then provide a rating for each comparison category.
          </p>

          <CollapsibleCard title="Comparison Questions" nested={true} defaultExpanded={false}>
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
          </CollapsibleCard>

          <h3 className="subsection-title">Rating Scale</h3>
          <div style={{ marginBottom: '1rem' }}>
            <img src={ratingScaleImage} alt="Rating Scale 1-8" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <p>
            You must make a relative judgment, even if both responses are flawed.
          </p>

          <h3 className="subsection-title">Additional Comments (Optional)</h3>
          <p className="list-intro">Use this section to:</p>
          <ul className="bullet-list">
            <li>Call out important tradeoffs</li>
            <li>Explain edge cases that influenced your decision</li>
            <li>Add context that is not captured elsewhere</li>
          </ul>
          <p className="list-follow-up">Do not repeat earlier critiques unless necessary.</p>
          <CollapsibleCard title="Visual" nested={true}>
            <div style={{ marginTop: '0.5rem' }}>
              <img src={sxs1Image} alt="Side by Side Comparison Interface 1" style={{ display: 'block', width: '100%', height: 'auto', marginBottom: '1rem' }} />
              <img src={sxs2Image} alt="Side by Side Comparison Interface 2" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </CollapsibleCard>
        </CollapsibleCard>

        <CollapsibleCard title="Step 7: Final Submission Step on Snorkel Platform">
          <p className="note">
            Your final submission step is on <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" className="link">the Snorkel platform</a> and <strong>must be completed in order to receive compensation</strong>. The external platform sends your task data back to the Snorkel platform, where you must review and finalize it.
          </p>
          <p>
            You will be shown a summary of the task data from the external platform and will be asked to answer a short set of questions to confirm and complete your work.
          </p>

          <p className="list-intro">You will be asked:</p>
          <ul className="bullet-list">
            <li>Approximately how long did it take you to complete the task?</li>
            <li>Did you encounter any nuances, edge cases, or platform issues you would like to call out
            (e.g., unclear instructions, UI issues, or model behavior patterns)?</li>
          </ul>

          <p className="note" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <strong>NOTE:</strong> You will not be able to edit any of the data in this step, thus it is crucial that you do a careful and thorough job on the external platform. Any major mistakes will not be able to be corrected and will result in task rejection.
          </p>

          <p className="list-intro">All responses will be reviewed to ensure:</p>
          <ul className="bullet-list">
            <li>Evaluation instructions were followed correctly</li>
            <li>Ratings and selections are internally consistent</li>
            <li>Explanations are clear and justified</li>
          </ul>
          <CollapsibleCard title="Visual" nested={true}>
            <div style={{ marginTop: '0.5rem' }}>
              <img src={platform1Image} alt="Platform Interface 1" style={{ display: 'block', width: '100%', height: 'auto', marginBottom: '0' }} />
              <div style={{ overflow: 'hidden', marginTop: '-20px', marginBottom: '1rem' }}>
                <img src={platform2Image} alt="Platform Interface 2" style={{ display: 'block', width: '100%', height: 'auto', clipPath: 'inset(20px 0 0 0)' }} />
              </div>
              <div style={{ overflow: 'hidden', marginTop: '-20px', marginBottom: '0' }}>
                <img src={platform3Image} alt="Platform Interface 3" style={{ display: 'block', width: '100%', height: 'auto', clipPath: 'inset(20px 0 60px 0)' }} />
              </div>
              <img src={platform4Image} alt="Platform Interface 4" style={{ display: 'block', width: '100%', height: 'auto', marginTop: '-60px' }} />
            </div>
          </CollapsibleCard>
        </CollapsibleCard>
      </div>
    </div>
  )
}

export default TaskWorkflow
