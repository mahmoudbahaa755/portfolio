import { useState, useEffect } from 'react';
import { getMetadata } from '../utils/metadata';

export default function LinkPreview({ url }) {
  const [metadata, setMetadata] = useState({ title: '', description: '', image: '' });

  useEffect(() => {
    async function fetchMetadata() {
      const data = await getMetadata(url);
      setMetadata(data);
    }
    fetchMetadata();
  }, [url]);

  return (
    <div className="link-preview">
      {metadata.image && <img src={metadata.image} alt={metadata.title} />}
      <h3>{metadata.title}</h3>
      <p>{metadata.description}</p>
    </div>
  );
}
