import './Section.css'

function GettingStarted() {
  return (
    <div className="section">
      <h1 className="section-title">Getting Started</h1>
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Setup</h2>
          <p className="note">
            <strong>Note:</strong> If you get timed out on the platform and get error 409, please open the tool in
            incognito mode to keep working on the tasks or try to use the skip button to keep tasking.
          </p>
          <p>
            To begin tasking on the platform, you'll receive an alias email address at your registered email.
          </p>
          <ol className="step-list">
            <li>
              Log in using your alias email at:
              <br />
              <a href="https://feedback.anthropic.com/surveyor/prwriter_0123?email_login=true" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="link">
                https://feedback.anthropic.com/surveyor/prwriter_0123?email_login=true
              </a>
              <br />
              <span className="note-text">If presented with a "login with Google" option, do not choose it, it will not work.</span>
            </li>
            <li>You'll receive an email verification code at your personal email. Enter that code to complete login and start tasking.</li>
          </ol>
          {/* ASSESSMENT REFERENCE - COMMENTED OUT */}
          {/* <p className="note">
            <strong>Important:</strong> The initial assessment is just the one task on the Snorkel platform. Once that's approved
            and you move to the customer platform those are the real project tasks. Please take your time
            here, your work is still reviewed.
          </p> */}
          <p className="note">
            <strong>Note:</strong> If you have not received your alias, flag it to Connor Young.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Step 1: Capability Check</h2>
          <p>
            At the top of the task, you will see the user's initial prompt, followed by a conversation history.
            This is all just to give you context on the conversation so far. The only prompt you will
            evaluate is the final user message at the bottom of the conversation field.
          </p>
          <p className="note">
            <strong>NOTE:</strong> The prompt you need to review will be at the bottom of the prompt.
          </p>
          <p>You will have further context and files on the platform.</p>
          <p>
            Before evaluating anything else, confirm whether you can reasonably evaluate the task.
          </p>
          <p><strong>Select "Yes, I can evaluate this task" if:</strong></p>
          <ul className="bullet-list">
            <li>The task prompt is understandable</li>
            <li>Required files or context are present</li>
            <li>You are familiar with the programming language or domain</li>
          </ul>
          <p><strong>Select "No – technical issues only" if:</strong></p>
          <ul className="bullet-list">
            <li>The task is fundamentally broken</li>
            <li>The task cannot be evaluated by anyone</li>
          </ul>
          <p>If you select No, you must clearly explain why the task could not be completed.</p>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
