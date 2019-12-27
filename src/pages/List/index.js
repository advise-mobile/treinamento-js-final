import Button from '../../components/Button';

export default function List() {
  const state = {
    loading: true,
    error: false,
  };

  const markAsFavorite = () => {
    const newData = window.state.data.map(item => {
      if (item.id === id) {
        item.fav = !item.fav;
        return item;
      }
      return item;
    });

    window.state = {
      ...window.state,
      data: newData,
    };
  };

  const list = /*html*/ `
    <ul>
      ${window.state.data
        .map(
          item =>
            /*html*/ `<li>${item.name}</li> ${Button(
              markAsFavorite,
              'Favoritar'
            )}`
        )
        .join(' ')}


    </ul>
  `;

  document.getElementById('list').innerHTML = state.loading
    ? 'carregando...'
    : '';

  setTimeout(() => {
    document.getElementById('list').innerHTML = list;
    state.loading = false;
  }, 2);
}
