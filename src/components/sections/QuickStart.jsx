import { useState } from 'react'
import './Section.css'
// import assessmentImage from '../../../images/assessment.png'
import anthropicWelcomeImage from '../../../images/Anthropic_welcome.png'
import capabilityCheckImage from '../../../images/capability_check.png'
import responseA1Image from '../../../images/responseA_1.png'
import platform1Image from '../../../images/platform1.png'
import tunaSubmissionReviewImage from '../../../images/tuna-submission-review2.png'

function QuickStart({ setActiveSection }) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    // ASSESSMENT STEP - COMMENTED OUT
    // {
    //   number: 1,
    //   badge: 'One-time',
    //   image: assessmentImage,
    //   content: (
    //     <>
    //       <p>Take the Project Tuna assessment (Tuna-Model-Review-Assessment) on <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" className="link">the Snorkel platform</a>.</p>
    //       <p className="step-detail">The assessment determines if you are eligible to task on Project Tuna. You will have one chance to pass the assessment and will not be able to task if you do not pass, so please take your time and do the best you can!</p>
    //     </>
    //   ),
    //   type: 'one-time'
    // },
    {
      number: 1,
      badge: 'One-time',
      visual: 'slack',
      content: (
        <>
          <p>You will receive an email alias via Slack.</p>
          <p className="step-detail">This alias is what you will use to log in to the external tasking platform. This external platform is where the majority of your tasking is performed.</p>
        </>
      ),
      type: 'one-time'
    },
    {
      number: 2,
      image: capabilityCheckImage,
      content: (
        <>
          <p>Go to <a href="https://feedback.anthropic.com/surveyor/hf_pr_writer_0206_pt2?email_login=true" target="_blank" rel="noopener noreferrer" className="link">the external platform</a> and log in to create your task - review and evaluate the given prompt and model responses.</p>
          <p className="step-detail">Click Submit at the end to complete this step.</p>
        </>
      ),
      type: 'regular'
    },
    {
      number: 3,
      image: tunaSubmissionReviewImage,
      content: (
        <>
          <p>After clicking Submit on the external platform, return to the Tuna-Submission-Review project on <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" className="link">the Snorkel platform</a> to claim and finalize your task submission.</p>
          <p className="step-detail">Finalizing your task on the Snorkel platform is what signifies task completion.</p>
        </>
      ),
      type: 'regular'
    },
    {
      number: 4,
      visual: 'money',
      content: <p>Once our expert reviewers approve your task, you get paid! </p>,
      type: 'success'
    }
  ]

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const goToStep = (index) => {
    setCurrentStep(index)
  }

  return (
    <div className="section">
      <div className="section-content">
        <div className="card">
          <div className="workflow-carousel">
            <div className="carousel-container">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`workflow-step-carousel ${step.type} ${index === currentStep ? 'active' : ''}`}
                  style={{ transform: `translateX(${(index - currentStep) * 100}%) translateY(-50%)` }}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    {step.badge && <div className="step-badge">{step.badge}</div>}
                    {step.content}
                    {step.image && (
                      <div className={`step-image-container ${step.number === 3 ? 'step-4-image' : ''}`}>
                        <img src={step.image} alt={`Step ${step.number} visual`} className="step-image" />
                      </div>
                    )}
                    {step.visual === 'slack' && (
                      <div className="slack-visual">
                        <div className="slack-emoji">💬</div>
                      </div>
                    )}
                    {step.visual === 'money' && (
                      <div className="money-visual">
                        <div className="piggy-bank-container">
                          <div className="piggy-bank">🐷</div>
                          <div className="falling-coins">
                            <div className="falling-coin coin-1">🪙</div>
                            <div className="falling-coin coin-2">🪙</div>
                            <div className="falling-coin coin-3">🪙</div>
                            <div className="falling-coin coin-4">🪙</div>
                          </div>
                          <div className="sparkles">
                            <div className="sparkle sparkle-1">✨</div>
                            <div className="sparkle sparkle-2">✨</div>
                            <div className="sparkle sparkle-3">✨</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              {currentStep === steps.length - 1 && (
                <p className="carousel-instruction">Return to the external platform to create a new task</p>
              )}
              <div className="carousel-nav-wrapper">
                <button className="carousel-btn prev" onClick={prevStep} aria-label="Previous step">
                  ←
                </button>
                <div className="carousel-indicators">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentStep ? 'active' : ''}`}
                      onClick={() => goToStep(index)}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="carousel-btn next" onClick={nextStep} aria-label="Next step">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickStart
