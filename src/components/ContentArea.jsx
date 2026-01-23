import QuickStart from './sections/QuickStart'
import Overview from './sections/Overview'
import TaskWorkflow from './sections/TaskWorkflow'
import WeaknessCategories from './sections/WeaknessCategories'
import ComparisonQuestions from './sections/ComparisonQuestions'
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
      case 'weakness-categories':
        return <WeaknessCategories />
      case 'comparison-questions':
        return <ComparisonQuestions />
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
