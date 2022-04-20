import { Helmet } from 'react-helmet';
import { SeoProps } from 'types';

const Seo = ({ title, description }: SeoProps) => {
  return (
    <Helmet>
      <title>{title ?? 'Spotify App'}</title>

      <meta name="title" content={title ?? 'Spotify App'} />
      <meta
        name="description"
        content={`${
          description ??
          'Spotify App that allows you to search for songs, artists, albums and playlists. Spotify App is a React.js application that uses the Spotify API.'
        }`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gg2-module2-s2.vercel.app/" />
      <meta property="og:title" content={title ?? 'Spotify App'} />
      <meta
        property="og:description"
        content={`${
          description ??
          'Spotify App that allows you to search for songs, artists, albums and playlists. Spotify App is a React.js application that uses the Spotify API'
        }`}
      />
      <meta property="og:image" content="https://i.ibb.co/YWJyXBv/handleryouth-xyz.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gg2-module2-s2.vercel.app/" />
      <meta property="twitter:title" content={title ?? 'Spotify App'} />
      <meta
        property="twitter:description"
        content={`${
          description ??
          'Spotify App that allows you to search for songs, artists, albums and playlists. Spotify App is a React.js application that uses the Spotify API.'
        }`}
      />
      <meta property="twitter:image" content="https://i.ibb.co/YWJyXBv/handleryouth-xyz.webp" />
    </Helmet>
  );
};

export default Seo;
