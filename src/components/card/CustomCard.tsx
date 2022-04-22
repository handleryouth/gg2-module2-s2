import { Tooltip } from 'components'
import Button from 'components/button/Button'
import Section from 'components/section/Section'
import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { LazyLoadImage } from 'react-lazy-load-image-component'
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
  selectCondition,
  allowSelect
}: CustomCardProps) {
  const history = useHistory()

  return (
    <motion.div
      onClick={() => (enabledDetails ? history.push(`albums/${id}`) : null)}
      whileHover={{
        scale: 1.08
      }}
      transition={{
        duration: 0.3
      }}
    >
      <Card
        data-testid="card"
        title={
          <Tooltip
            target="card-title"
            textslice={title.length > 13 ? `${title.slice(0, 13)}...` : title}
            text={title}
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
        className="bg-black w-[280px] sm:w-[300px] cursor-pointer prose"
        footer={
          allowSelect && (
            <Button
              className="w-full h-10"
              toggleFunction={selectCondition ? toggleDeselected : toggleSelected}
            >
              {selectCondition ? 'Deselect' : 'Select'}
            </Button>
          )
        }
        header={
          <LazyLoadImage className="h-72  my-0 rounded" src={image} alt={title} threshold={50} />
        }
      >
        <div className=" prose-p:my-2  text-white h-[9rem] overflow-auto">
          <Section title="Release Date" value={date} />
          <Section title="Total Tracks" value={totalTracks} />
        </div>
      </Card>
    </motion.div>
  )
}

export default CustomCard
