import { useState } from 'react'
import './Section.css'
import assessmentImage from '../../../images/assessment.png'
import anthropicWelcomeImage from '../../../images/Anthropic_welcome.png'
import capabilityCheckImage from '../../../images/capability_check.png'
import responseA1Image from '../../../images/responseA_1.png'
import platform1Image from '../../../images/platform1.png'

function QuickStart({ setActiveSection }) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      number: 1,
      badge: 'One-time',
      image: assessmentImage,
      content: (
        <>
          <p>Take the Project Tuna assessment on <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" className="link">the Snorkel platform</a></p>
          <p className="step-detail">(Tuna-Model-Review-Assessment)</p>
        </>
      ),
      type: 'one-time'
    },
    {
      number: 2,
      badge: 'One-time',
      content: (
        <>
          <p>Receive email alias</p>
          <p className="step-detail">This alias is what you will use to log in to the external tasking platform.</p>
        </>
      ),
      type: 'one-time'
    },
    {
      number: 3,
      image: capabilityCheckImage,
      content: (
        <p>Go to <a href="https://feedback.anthropic.com/surveyor/prwriter_snorkel?email_login=true" target="_blank" rel="noopener noreferrer" className="link">the external platform</a> to create your task</p>
      ),
      type: 'regular'
    },
    {
      number: 4,
      image: responseA1Image,
      content: (
        <>
          <p>Come back to <a href="https://experts.snorkel-ai.com/home" target="_blank" rel="noopener noreferrer" className="link">the Snorkel platform</a> to claim and finalize your task</p>
          <p className="step-detail">(Tuna-Submission-Review)</p>
        </>
      ),
      type: 'regular'
    },
    {
      number: 5,
      visual: 'money',
      content: <p>Receive compensation!</p>,
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
                  style={{ transform: `translateX(${(index - currentStep) * 100}%)` }}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    {step.badge && <div className="step-badge">{step.badge}</div>}
                    {step.content}
                    {step.image && (
                      <div className="step-image-container">
                        <img src={step.image} alt={`Step ${step.number} visual`} className="step-image" />
                      </div>
                    )}
                    {step.visual === 'money' && (
                      <div className="money-visual">
                        <div className="piggy-bank-container">
                          <div className="piggy-bank">🐷</div>
                          <div className="coin-slot"></div>
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
