import { nouns } from './nouns.js';
import { animals } from './animals.js';
import { randUtil } from './random.js';

const init = function(){
  console.log(nouns);
  console.log(animals);
  console.log(randUtil);

  document.querySelector('h1').innerHTML = `<p>${nouns[randUtil.randHue()]}</p><p>${nouns[randUtil.randHue()]}</p>`;

  let selectedAnimals = animals[randUtil.randInt(0, animals.length-1)];

  document.querySelector('.feature').innerHTML = `<a href="${selectedAnimals.url}" alt="${selectedAnimals.credit}">${selectedAnimals.title}</a>`;
  
  selectedAnimals = randUtil.randArrayItem(animals);
  document.querySelector('.gallery').innerHTML = `<a href="${selectedAnimals.url}" alt="${selectedAnimals.credit}">${selectedAnimals.title}</a>`;
}
window.addEventListener('load', init);


