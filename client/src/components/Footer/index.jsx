import links from './links.json';
import './styles.scss';

export default function Footer() {
  return (
    <footer>
      {links.map((link) => {
        const { name, url } = link;
        return (
          <a key={name} href={url} className="nav-item">
            {name}
          </a>
        );
      })}
    </footer>
  );
}
