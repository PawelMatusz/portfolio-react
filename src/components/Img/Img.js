import './img.scss';

export default function Img({ src, alt }) {
  return (
    <img className="img" alt={alt} src={src}/>
  )
}
