import axios from 'axios';
import { load } from 'cheerio';

export async function getMetadata(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);

    const title = $('title').text() || $('meta[property="og:title"]').attr('content') || '';
    const description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || '';
    const image = $('meta[property="og:image"]').attr('content') || $('meta[name="twitter:image"]').attr('content') || '';

    return {
      title,
      description,
      image
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: '',
      description: '',
      image: ''
    };
  }
}
