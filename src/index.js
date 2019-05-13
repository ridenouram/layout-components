import styles from './index.css';

const root = document.getElementById('root');

const dogs = document.createElement('ul');
dogs.className = styles.dogs;

['spot', 'rover', 'bingo', 'joe'].forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  dogs.appendChild(li);
});

root.appendChild(dogs);
