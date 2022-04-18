import { useCallback, useState, useEffect } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { useParams } from 'react-router-dom'
import { AlbumProps } from 'types'
import { requestHelper } from 'utils'

interface AlbumDetailsParams {
  id: string
}

const AlbumDetail = () => {
  const [responseData, setResponnseData] = useState<AlbumProps>()

  const { id } = useParams<AlbumDetailsParams>()

  const handleLoadData = useCallback(async () => {
    await requestHelper.get(`/albums/${id}`).then((res) => setResponnseData(res.data))
  }, [id])

  useEffect(() => {
    handleLoadData()
  }, [handleLoadData])

  if (!responseData) {
    return <div />
  }

  return (
    <div className="py-8">
      <div className="flex items-center">
        <img src={responseData.images[0].url} width={300} height={300} />

        <div className="flex-grow text-center ">
          <h1 className="text-white">{responseData.name}</h1>
          <p className="text-white">{responseData.release_date}</p>
        </div>
      </div>

      <Accordion multiple>
        <AccordionTab header="Type">{responseData.album_type}</AccordionTab>
        <AccordionTab header="Total Tracks">{responseData.total_tracks}</AccordionTab>
        <AccordionTab header="Artists">
          {
            <div>
              {responseData.artists.map((artist, index) => (
                <p key={index}>{artist.name}</p>
              ))}
            </div>
          }
        </AccordionTab>
        <AccordionTab header="Track Albums">
          {responseData.tracks.items.map((track, index) => (
            <p key={index}>{track.name}</p>
          ))}
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default AlbumDetail
