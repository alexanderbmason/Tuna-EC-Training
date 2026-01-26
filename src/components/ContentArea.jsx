import QuickStart from './sections/QuickStart'
import Overview from './sections/Overview'
import TaskWorkflow from './sections/TaskWorkflow'
import AutomatedEvals from './sections/AutomatedEvals'
import ReviewGuidelines from './sections/ReviewGuidelines'
import BestPractices from './sections/BestPractices'
import './ContentArea.css'

function ContentArea({ activeSection, setActiveSection }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'quick-start':
        return <QuickStart setActiveSection={setActiveSection} />
      case 'overview':
        return <Overview setActiveSection={setActiveSection} />
      case 'task-workflow':
        return <TaskWorkflow setActiveSection={setActiveSection} />
      case 'automated-evals':
        return <AutomatedEvals />
      case 'review-guidelines':
        return <ReviewGuidelines />
      case 'best-practices':
        return <BestPractices setActiveSection={setActiveSection} />
      default:
        return <QuickStart setActiveSection={setActiveSection} />
    }
  }

  return (
    <main className="content-area">
      <div className="content-container">
        {renderContent()}
      </div>
    </main>
  )
}

export default ContentArea
