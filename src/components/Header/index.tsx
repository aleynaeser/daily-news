import Logo from './Logo';
import Menu from './Menu';
import Tagline from './Tagline';

export default function Header() {
  return (
    <header className='grid min-h-44 auto-cols-fr auto-rows-auto'>
      <Logo />
      <Tagline />
      <Menu />
    </header>
  );
}
