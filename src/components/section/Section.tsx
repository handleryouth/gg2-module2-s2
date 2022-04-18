import { SectionProps } from 'types'

function Section({ title, value }: SectionProps) {
  return (
    <div className="prose-h3:text-white prose-h3:my-0" data-testid="card-detail">
      <h3>{title}</h3>
      {typeof value !== 'string' ? <>{value}</> : <p>{value}</p>}
    </div>
  )
}

export default Section
