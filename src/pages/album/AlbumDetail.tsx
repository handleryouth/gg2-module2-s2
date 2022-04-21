import { useCallback, useState, useEffect } from 'react';
import { Button, Seo } from 'components';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Image } from 'primereact/image';
import { useHistory, useParams } from 'react-router-dom';
import { AlbumDetailsParams, AlbumProps } from 'types';
import { requestHelper } from 'utils';

const AlbumDetail = () => {
  const [responseData, setResponnseData] = useState<AlbumProps>();
  let rendered = true;
  const history = useHistory();
  const { id } = useParams<AlbumDetailsParams>();

  const handleLoadData = useCallback(async () => {
    await requestHelper.get(`/albums/${id}`).then((res) => rendered && setResponnseData(res.data));
  }, [id, rendered]);

  useEffect(() => {
    handleLoadData();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      rendered = false;
    };
  }, [handleLoadData]);

  if (!responseData) {
    return <div />;
  }

  return (
    <div className="py-8 min-h-screen">
      <Seo
        title={`${responseData.name} - ${responseData.artists[0].name}`}
        description={`${responseData.name} - ${responseData.artists[0].name} details`}
      />
      <Button toggleFunction={() => history.goBack()}>Back</Button>
      <div className="flex items-center md:flex-row flex-col">
        <Image src={responseData.images[0].url} width="300" height="300" preview />

        <div className="flex-grow text-center  ">
          <h2 className=" text-3xl text-white sm:w-96 mx-auto">{responseData.name}</h2>
          <p className="text-white">{responseData.release_date}</p>
        </div>
      </div>

      <Accordion multiple>
        <AccordionTab className="prose max-w-none" header="Type">
          {responseData.album_type}
        </AccordionTab>
        <AccordionTab className="prose max-w-none" header="Total Tracks">
          {responseData.total_tracks}
        </AccordionTab>
        <AccordionTab className="prose max-w-none" header="Artists">
          {
            <div>
              {responseData.artists.map((artist, index) => (
                <p key={index}>{artist.name}</p>
              ))}
            </div>
          }
        </AccordionTab>
        <AccordionTab className="prose max-w-none" header="Track Albums">
          {responseData.tracks.items.map((track, index) => (
            <p key={index}>{track.name}</p>
          ))}
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default AlbumDetail;
