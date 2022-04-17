import { Card } from 'primereact/card'
import { CustomCardProps } from 'types'
import Button from './Button'
import CardDetail from './CardDetail'

function CustomCard({
  image,
  title,
  artist,
  date,
  totalTracks,
  toggleSelected,
  toggleDeselected,
  selectCondition
}: CustomCardProps) {
  return (
    <Card
      data-testid="card"
      title={
        <h3 className="text-2xl text-white my-0">
          {title.length > 13 ? `${title.slice(0, 13)}...` : title}
        </h3>
      }
      subTitle={
        <div className="h-16 overflow-auto">
          {artist.map((item, index) => {
            return (
              <p className="my-0" key={index}>
                {item.name}
              </p>
            )
          })}
        </div>
      }
      className="bg-black w-[280px] sm:w-[300px]  prose"
      footer={
        <Button
          title={selectCondition ? 'Deselect' : 'Select'}
          className="w-full h-10"
          toggleFunction={selectCondition ? toggleDeselected : toggleSelected}
        />
      }
      header={<img className=" h-72  my-0 rounded" src={image} alt={title} />}>
      <div className=" prose-p:my-2  text-white h-[9rem] overflow-auto">
        <CardDetail title="Release Date" value={date} />
        <CardDetail title="Track Number" value={totalTracks} />
      </div>
    </Card>
  )
}

export default CustomCard
