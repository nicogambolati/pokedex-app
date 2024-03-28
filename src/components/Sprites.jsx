

export const Sprites = ({sprites}) => {
  return (
    <div className="d-flex justify-content-center">
    {sprites.map((sprite) => (
      <img key={sprite} src={sprite} alt={sprite} width={250} height={250}/>
    ))}
  </div>
  )
}
