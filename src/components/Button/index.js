import { TextButton } from './styles';

const Button = (fn, text) => {
  const button = /*html*/ `<button type="button" style="${TextButton}" onclick="(${fn})()" >${text}</button>`;

  return button;
};

export default Button;
