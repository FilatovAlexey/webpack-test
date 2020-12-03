import Counter from './button';
import './styles/button.css';

const button = document.querySelector('.button-click');
const textButton = document.querySelector('.counter-click');
const cnt = new Counter(0);

button.addEventListener('click', () => {
  cnt.increment();
  textButton.textContent = cnt.getCounter();
});
