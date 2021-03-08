import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors appointment',
        day: 'feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Doctors appointment',
        day: 'Dec 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Doctors appointment',
        day: 'Jan 5th at 2:30pm',
        reminder: false,
      },
    ])
  //delete function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className='Container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
          {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task to show')}
    </div >
  )
}

export default App
