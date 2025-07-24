const API_KEY = "AIzaSyDU46mgmOvEEMg8YoPOuVguiMnWtpesgSg";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_QUERY_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cstatistics&maxResults=20&key=" +
  API_KEY;
export const YOUTUBE_COMMENTS =
  "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=" +
  API_KEY +
  " HTTP/1.1";
export const YOUTUBE_SEARCH =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Queryhttp://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
