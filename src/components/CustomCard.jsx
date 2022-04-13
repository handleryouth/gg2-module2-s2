import { Card } from 'primereact/card'
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
}) {
  const header = <img className=" h-72  my-0" src={image} alt={title} />

  const footer = (
    <button
      className="rounded hover:bg-black  text-center h-10 transition-colors bg-transparent w-full border-2 border-white text-white duration-200"
      onClick={selectCondition ? toggleDeselected : toggleSelected}>
      {selectCondition ? 'Deselect' : 'Select'}
    </button>
  )

  return (
    <Card
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
      className="bg-black w-[280px] sm:w-[320px]  prose"
      footer={footer}
      header={header}>
      <div className=" prose-p:my-2  text-white h-[9rem] overflow-auto">
        <CardDetail title="Release Date" value={date} />
        <CardDetail title="Track Number" value={totalTracks} />
      </div>
    </Card>
  )
}

export default CustomCard
