import Button from '../../components/Button';

export default function Main() {
  const doSomething = () => {
    alert('func1');
  };

  const doSomething1 = () => {
    alert('func2');
  };

  document.getElementById('container').innerHTML = /*html*/ `
    <h1>Olá Brasil</h1>
    ${Button(doSomething, 'Button 1')}
    ${Button(doSomething1, 'Button 2')}
  `;
}
