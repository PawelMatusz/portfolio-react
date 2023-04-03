export default function Card({
  projectInfo: { name, description, techStack },
}) {
  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
      <ul>
        {techStack.map((el) => (
          <li>el</li>
        ))}
      </ul>
    </>
  );
}
