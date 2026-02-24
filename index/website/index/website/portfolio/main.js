const index = gsap.matchMedia();

const YT_API_KEY = "AIzaSyBgLl5FzDYCfEgnbv32jg5wFjzv9Joy1lQ";
const PLAYLIST_ID = "PLANOU4wV86bSHFyBcaFf39sQzoXIXqHly";

async function loadMyMusic() {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${YT_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const container = document.getElementById("music-panel-content");
    
    container.innerHTML = "";
    data.items.forEach((item) => {
      if (!item.snippet || !item.snippet.thumbnails) return;

      const title = item.snippet.title;
      const thumb = item.snippet.thumbnails.medium ? item.snippet.thumbnails.medium.url : item.snippet.thumbnails.default.url;
      const videoId = item.snippet.resourceId.videoId;

      container.innerHTML += `
        <div class="music-item">
          <img src="${thumb}" style="width:50px; border-radius:4px;">
          <div class="music-text"><a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" style="color: white; text-decoration: none;">${title}</a></div>
        </div>
      `;});
    } catch (error) { console.error("Error loading the playlist:", error);}}

  loadMyMusic();

  const ANILIST_USERNAME = "Waff152";
  
  async function loadAnime() {

    const query = `query ($username: String) {MediaListCollection(userName: $username, type: ANIME, sort: UPDATED_TIME_DESC) {lists { entries {score(format: POINT_10) media {siteUrl title {english romaji}coverImage {large}}}}}}`;
  
    const url = 'https://graphql.anilist.co';
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Accept': 'application/json',},
      body: JSON.stringify({query: query,variables: {username: ANILIST_USERNAME
    }})};
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const container = document.getElementById("anime-content-container");

      container.innerHTML = ""; 
  
      const allLists = data.data.MediaListCollection.lists;
      const maxAnime = 10; 
      let animeCount = 0;
  
      if (!document.getElementById("anime-panel-title")) {
          const titleDiv = document.createElement("div");
          titleDiv.id = "anime-panel-title";
          titleDiv.innerHTML = `Watchlist - <span style="color: hsl(312, 100%, 70%);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/></svg></span>`;
          document.getElementById("container-anime").prepend(titleDiv);
      }
  
      allLists.forEach(list => {
        list.entries.forEach(entry => {
          if (animeCount >= maxAnime) return;
  
          const title = entry.media.title.english || entry.media.title.romaji;
          const cover = entry.media.coverImage.large;
          const link = entry.media.siteUrl;
          const score = entry.score > 0 ? entry.score : "-"; 
          const html = `<a href="${link}" target="_blank" class="anime-card"><div class="anime-img-wrapper"><img src="${cover}" alt="${title}" loading="lazy" /></div><div class="anime-info"><div class="anime-name">${title}</div><div class="anime-score"><span class="star">★</span> ${score}</div></div></a>`;
          
          container.innerHTML += html;
          animeCount++;
        });
      });
    } catch (error) {
      console.error("Error loading AniList:", error);
      document.getElementById("anime-content-container").innerHTML = "<p>Could not load anime.</p>";
    }}
  
  loadAnime();
