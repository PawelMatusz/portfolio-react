import './link.scss';

export default function Link({ href, children }) {
  return (
   <a className="link" href={href}>{children}</a>
  )
}
