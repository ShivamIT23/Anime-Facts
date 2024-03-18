const img = async ()=>{
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://any-anime.p.rapidapi.com/v1/anime/gif/1',
      headers: {
        'X-RapidAPI-Key': '310d631612msh130c3edc31be461p1cfca5jsn1b52efd86862',
        'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
img();