import './Section.css'

function WeaknessCategories() {
  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
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
        </div>
      </div>
    </div>
  )
}

export default WeaknessCategories
