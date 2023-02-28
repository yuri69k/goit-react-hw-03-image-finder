// import axios from 'axios';
// const postsApi = axios.create({
//   baseURL: 'https://pixabay.com/api/',
// });

const BASE_URL = 'https://pixabay.com/api/';

export async function fetchPictures(query, page) {
  const searchParams = new URLSearchParams({
    key: '31376516-e3ddce4fc42a7fa5d1a63c141',
    q: query,
    image_type: 'photo',
    per_page: 12,
    orientation: 'horizontal',
    page: page,
  });
  const url = `${BASE_URL}?${searchParams}`;
  const response = await fetch(url);
  return response.json();
}
