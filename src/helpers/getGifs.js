export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=rqBWk6JX25zq07maOFqriBtEo3o5rntJ&q=${category}&limit=3`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gif = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gif);
  return gif;
};
