import './heading.scss';

export default function Heading({ level = 2, children }) {
  const Tag = `h${level}`;

  function slugify(text = '') {
    const stringChildren = `${[...text].filter(word => typeof word == 'string')}`;

    return stringChildren.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }

  return (
    <>
      <Tag className={`heading heading--h${level}`} id={slugify(children)}>{children}</Tag>
    </>
  )
}
