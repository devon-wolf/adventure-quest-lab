import questData from '../data/data.js';
import { findByID } from '../utils/data-utils.js';

const params = new URLSearchParams(window.location.search);
const choiceID = params.get('choices');

const choiceObject = findByID(choiceID, questData.choices);
console.log(choiceObject);