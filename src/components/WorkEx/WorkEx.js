import uniqid from 'uniqid'
import { workex } from '../../portfolio'
import WorkExContainer from '../WorkExContainer/WorkExContainer'
import './WorkEx.css'

const WorkEx = () => {
  if (!workex.length) return null

  return (
    <section id='workex' className='section projects'>
      <h2 className='section__title'>Internship Experience</h2>

      <div className='projects__grid'>
        {workex.map((workexitem) => (
          <WorkExContainer key={uniqid()} workex={workexitem} />
        ))}
      </div>
    </section>
  )
}

export default WorkEx
