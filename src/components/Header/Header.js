import Wrapper from '../Wrapper/Wrapper';
import Link from '../Link/Link';
import './header.scss';

export default function Header() {
  const links = [
    '#experience',
    '#projects',
    '#tech-stack',
    '#education',
    '#contact'
  ]

  return (
    <header className='header'>
			<Wrapper>
					<h1 className='header__logo'>PawelMatusz.pl</h1>

          <nav className='header__nav'>
            {links.map(link => <Link key={link} href={link}>{link}</Link>) }
          </nav>
			</Wrapper>
    </header>
  )
}

