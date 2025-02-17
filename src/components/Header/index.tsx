import Logo from './Logo';
import Menu from './Menu';
import Tagline from './Tagline';

export default function Header() {
  return (
    <header className=''>
      <Logo />
      <Tagline />
      <Menu />
    </header>
  );
}
