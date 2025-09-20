import React from 'react';
import UrlItem from './UrlItem';

interface Url {
  id: string;
  originalUrl: string;
  shortenedUrl: string;
}

interface UrlListProps {
  urls: Url[];
}

const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <div>
      <h2>Shortened URLs</h2>
      <ul>
        {urls.map(url => (
          <UrlItem key={url.id} originalUrl={url.originalUrl} shortenedUrl={url.shortenedUrl} />
        ))}
      </ul>
    </div>
  );
};

export default UrlList;