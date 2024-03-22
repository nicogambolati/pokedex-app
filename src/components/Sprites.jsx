

export const Sprites = ({sprites}) => {
  return (
    <div>
    {sprites.map((sprite) => (
      <img key={sprite} src={sprite} alt={name} />
    ))}
  </div>
  )
}
