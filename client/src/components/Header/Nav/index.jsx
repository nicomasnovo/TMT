import links from './links.json';
import './styles.scss';

export default function Nav() {
  return (
    <nav>
      {links.map((link) => {
        const { name, url } = link;
        return (
          <a href={url} className="nav-item">
            {name}
          </a>
        );
      })}
    </nav>
  );
}
