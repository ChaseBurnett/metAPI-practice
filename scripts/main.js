import {fetchArt1} from "./data.js"

const paintingId = ["438815", "438011", "438014", "437430", "437432"]

const displayPaintings = async () => {
    for(const id of paintingId) {
    const data = await fetchArt1(id)
    renderPaintings(data)}
}

const renderPaintings = (data) => {
    let html = `
    <article>
      <section class="card">
        <p>Title: ${data.title}</p>
        <img src="${data.primaryImageSmall}">
      </section>
    </article>
    `
    document.getElementById('app').innerHTML += html
}

displayPaintings()