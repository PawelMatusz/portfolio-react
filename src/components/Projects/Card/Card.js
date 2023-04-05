import Heading from '../../Heading/Heading';
import './card.scss';

export default function Card({
  projectInfo: { name, description, techStack },
}) {
  return (
  
    <article className="card">
      <Heading>{name}</Heading>

      <p className='card__description'>{description}</p>
      <ul className='tech-stack-list'>
        {techStack.map((el,index) => (
          <li key={index} className='tech-stack-list__element'>{el}</li>
        ))}
      </ul>
    </article>
  );
}
