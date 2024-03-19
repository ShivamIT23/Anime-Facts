let image = [];
export const img = async ()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '310d631612msh130c3edc31be461p1cfca5jsn1b52efd86862',
      'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
    }
  };
  
  try {
    const request = await fetch('https://any-anime.p.rapidapi.com/v1/anime/gif/1',options);
    const response = await request.json();
    image = response.images;
    return image;
  } catch (error) {
    console.error(error);
    return image;
  }
}