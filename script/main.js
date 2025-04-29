//Before moving to Firebase

import { openModal, closeModal, initModalCloseOnOutsideClick } from './modal.js';
import { fetchlatestUpdates } from './latestUpdates.js';

// We are using window here to make openModal and closeModal functions accessible from HTML since we are using ES6 module
window.openModal = openModal;
window.closeModal = closeModal;
fetchlatestUpdates();
// Initialize modal click-outside-close
initModalCloseOnOutsideClick();
