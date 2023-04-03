import Wrapper from '../Wrapper/Wrapper';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import Img from '../Img/Img'
import './hero.scss';

import pawel from '../../assets/img/pawel.png';
import github from '../../assets/icons/github.svg';

export default function Hero() {
  return (
    <section className='hero'> 
        <Wrapper>
          <Heading level='1'>Cześć,<br/> <em>jestem</em> Paweł</Heading>
          <p className='hero__caption'>Szukam pracki</p>
          <Button href='#projects'>Moje prace <Img src={github} alt='GitHub icon'/></Button>

          <Img src={pawel} alt='pawel foto'/>
        </Wrapper>            
    </section>
)
}
