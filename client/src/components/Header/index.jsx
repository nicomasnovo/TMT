import machLogo from '@assets/mach.svg';
import Nav from './Nav';
import './styles.scss';

export default function Header() {
  return (
    <header>
      <a href="https://reactjs.org" target="_blank">
        <img src={machLogo} className="logo react" alt="React logo" />
      </a>
      <Nav />
    </header>
  );
}
