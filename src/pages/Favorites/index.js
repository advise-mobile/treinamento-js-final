export default function Favorites() {
  console.log(window.state.data);

  document.getElementById('favs').innerHTML = /*html*/ `
    <ul>
      ${window.state.data
        .map(item => {
          return item.fav ? /*html*/ `<li>${item.name}</li>` : '';
        })
        .join(' ')}
    </ul>
  `;
}
