import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './WorkExContainer.css'

const WorkExContainer = ({ workex }) => (
  <div className='project'>
    <h3>{workex.name}</h3>

    <p className='project__description'>{workex.description}</p>
    {workex.stack && (
      <ul className='project__stack'>
        {workex.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {workex.sourceCode && (
      <a
        href={workex.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {workex.livePreview && (
      <a
        href={workex.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default WorkExContainer
