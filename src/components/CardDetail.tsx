import { CardDetailProps } from 'types'

function CardDetail({ title, value }: CardDetailProps) {
  return (
    <div className="prose-h3:text-white prose-h3:my-0" data-testid="card-detail">
      <h3>{title}</h3>
      {typeof value !== 'string' ? <>{value}</> : <p>{value}</p>}
    </div>
  )
}

export default CardDetail
