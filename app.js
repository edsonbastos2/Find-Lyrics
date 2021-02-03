function findSong(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('.formulario')

form.addEventListener('submit', el => {
    el.preventDefault();
    toSong();
})

async function toSong() {
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');
    const lyricsSong = document.querySelector('#lyrics-song');

    lyricsSong.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only"></span></div>';


    try {
        const response = await findSong(artist.value, song.value);
        const data = await response.json()

        if (data.lyrics) {
            lyricsSong.innerHTML = data.lyrics
        } else {
            lyricsSong.innerHTML = data.error
        }
    } catch (err) {
        console.log(err)
    }
}