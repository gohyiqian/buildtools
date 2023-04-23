// Add import statements here
import './style.css';
import { greet } from './greetUser';
import { user } from './myUser';
import Text from './welcome.txt';
import Banner from './Banner.png';

greet(user.username, user.firstName);

const descriptionParagraph = document.getElementById('description');
descriptionParagraph.innerHTML = Text;

const imageElement = document.createElement('img');
imageElement.src = Banner;
descriptionParagraph.parentNode.appendChild(imageElement);

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const soups = [
  'Clam Chowder',
  'Minestrone',
  'Chicken Noodle',
  'Tortilla',
  'Gazpacho',
  'Wonton',
  'Tom Yum',
];

let index = 0;
const soupParagraph = document.getElementById('soup');
const dayParagraph = document.getElementById('day');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

const setSoupAndDay = () => {
  soupParagraph.innerHTML = soups[index];
  dayParagraph.innerHTML = days[index];
};

setSoupAndDay();

const tomorrow = () => {
  index = (index + 1) % days.length;
  setSoupAndDay();
};

nextButton.addEventListener('click', tomorrow);

const yesterday = () => {
  index = (index - 1 + days.length) % days.length;
  setSoupAndDay();
};
previousButton.addEventListener('click', yesterday);
