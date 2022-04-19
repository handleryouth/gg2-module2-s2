import { Tooltip } from 'components'
import Button from 'components/button/Button'
import Section from 'components/section/Section'
import { Card } from 'primereact/card'
import { useHistory } from 'react-router-dom'
import { CustomCardProps } from 'types'

function CustomCard({
  image,
  title,
  id,
  artist,
  date,
  totalTracks,
  toggleSelected,
  toggleDeselected,
  enabledDetails,
  selectCondition
}: CustomCardProps) {
  const history = useHistory()
  return (
    <div onClick={() => (enabledDetails ? history.push(`albums/${id}`) : null)}>
      <Card
        data-testid="card"
        title={
          <Tooltip
            target="card-title"
            textslice={title.length > 13 ? `${title.slice(0, 13)}...` : title}
            text={title}
            customclassName="text-white"
          />
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
          selectCondition && (
            <Button
              className="w-full h-10"
              toggleFunction={selectCondition ? toggleDeselected : toggleSelected}>
              {selectCondition ? 'Deselect' : 'Select'}
            </Button>
          )
        }
        header={<img className=" h-72  my-0 rounded" src={image} alt={title} />}>
        <div className=" prose-p:my-2  text-white h-[9rem] overflow-auto">
          <Section title="Release Date" value={date} />
          <Section title="Total Tracks" value={totalTracks} />
        </div>
      </Card>
    </div>
  )
}

export default CustomCard
