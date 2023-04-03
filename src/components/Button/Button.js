import './button.scss';

export default function Button({ href, children }) {
  return (
    <a className="button" href={href}>{children}</a>
  )
}
