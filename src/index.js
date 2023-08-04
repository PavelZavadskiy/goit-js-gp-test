import {
  createAccount,
  signInApp,
  returnAuth,
  signOutApp,
  removeAccount,
  getUserShoppingList,
  updateUserShoppingList,
  getUserName,
  getUserEmail,
} from './js/api-firebase';

const btn6 = document.querySelector('.btn6');
btn6.addEventListener('click', () => {
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  console.log(createAccount(email.value, password.value, 'Gosha'));
});

const btn7 = document.querySelector('.btn7');
btn7.addEventListener('click', () => {
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  const answer = signInApp(email.value, password.value);
  console.log(answer);
});

const btn9 = document.querySelector('.btn9');
btn9.addEventListener('click', () => {
  console.log(returnAuth());
});

const btn10 = document.querySelector('.btn10');
btn10.addEventListener('click', () => {
  console.log(signOutApp());
});

const btn11 = document.querySelector('.btn11');
btn11.addEventListener('click', () => {
  console.log(removeAccount());
});

const btn12 = document.querySelector('.btn12');
btn12.addEventListener('click', () => {
  getUserShoppingList().then(shoppingList => {
    console.log(shoppingList);
  });
});

const updateShopList = async () => {
  const shoppingList = (await getTopBooks()).data.slice(1, 5);
  // console.log(shoppingList);
  return updateUserShoppingList(shoppingList);
};

const btn13 = document.querySelector('.btn13');
btn13.addEventListener('click', () => {
  updateShopList().then(res => {
    console.log(res);
  });
});

const btn14 = document.querySelector('.btn14');
btn14.addEventListener('click', () => {
  getUserName().then(userName => {
    console.log(userName);
  });
});

const btn15 = document.querySelector('.btn15');
btn15.addEventListener('click', () => {
  console.log(getUserEmail());
});

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

// import { database } from 'firebase/database';
// import { firestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME',
//   authDomain: 'read-easy-a785a.firebaseapp.com',
//   projectId: 'read-easy-a785a',
//   storageBucket: 'read-easy-a785a.appspot.com',
//   messagingSenderId: '672240774710',
//   appId: '1:672240774710:web:1093f9e83dded932d97297',
//   measurementId: 'G-PFEBLXEB67',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// //  var db = this.firebase.firestore();

// // const analytics = getAnalytics(app);
// // const db = firestore();

// const createUser = async (email, password) => {
//   return createUserWithEmailAndPassword(getAuth(app), email, password);
// };

// const signInUser = async (email, password) => {
//   return signInWithEmailAndPassword(getAuth(app), email, password);
// };

// // const addRecord = async () => {
// //   console.log('db');
// //   console.log(db);
// //   console.log('addRecord ->');
// //   // db.collection('users').add({
// //   //   name: 'userName',
// //   //   lastName: 'userLastName',
// //   // });
// //   const result = await setDoc(doc(db, 'users', 'names'), {
// //     id: '425252',
// //     name: 'Vitalik',
// //   });

// //   console.log('result');
// //   console.log(result);
// //   return result;
// // };

// const createAccount = async (email, password, userName) => {
//   let result = await createUserWithEmailAndPassword(getAuth(app), email, password);
//   console.log('createUserWithEmailAndPassword');
//   console.log(result.user.uid);

//   // result = await signInWithEmailAndPassword(getAuth(app), email, password);
//   // console.log('signInWithEmailAndPassword');
//   // console.log(result);
//   // console.log(result.user.uid);
//   // const shoppingList = (await getTopBooks()).data;
//   // console.log(shoppingList);

//   result = await setDoc(doc(db, 'users', result.user.uid), {
//     name: userName,
//     shoppingList: [],
//   });
// };

// import { collection, query, where } from 'firebase/firestore';

// const authAccount = async (email, password) => {
//   let result = await signInWithEmailAndPassword(getAuth(app), email, password);
//   console.log('signInWithEmailAndPassword');
//   console.log(result);
//   console.log(result.user.uid);

//   const docRef = doc(db, 'users', result.user.uid);
//   const docSnap = await getDoc(docRef);
//   console.log('getDoc');
//   console.log(docSnap.data());

//   return docSnap.data();

//   // Create a reference to the cities collection

//   // const userRef = collection(db, 'users');
//   // // Create a query against the collection.
//   // const q = query(userRef, where('state', '==', 'CA'));
//   // onsole.log('query');
//   // console.log(q);
// };

// // const updateShopList = async (email, password, shoppingList) => {

// const updateShopList = async (email, password) => {
//   let result = await signInWithEmailAndPassword(getAuth(app), email, password);
//   console.log('signInWithEmailAndPassword');
//   console.log(result);
//   console.log(result.user.uid);

//   const docRef = doc(db, 'users', result.user.uid);

//   const shoppingList = (await getTopBooks()).data.slice(1, 5);
//   console.log(shoppingList);

//   // Update the timestamp field with the value from the server
//   result = await updateDoc(docRef, {
//     shoppingList: shoppingList,
//   });

//   return result;

//   // Create a reference to the cities collection

//   // const userRef = collection(db, 'users');
//   // // Create a query against the collection.
//   // const q = query(userRef, where('state', '==', 'CA'));
//   // onsole.log('query');
//   // console.log(q);
// };

// // const

// // const createUsers = () => {
// //   const email = document.querySelector('.email');
// //   console.log(email.value);
// //   const password = document.querySelector('.password');
// //   console.log(password.value);
// //   createAccount(email.value, password.value, 'Gosha');
// // };

// const btn6 = document.querySelector('.btn6');
// btn6.addEventListener('click', () => {
//   const email = document.querySelector('.email');
//   console.log(email.value);
//   const password = document.querySelector('.password');
//   console.log(password.value);
//   // const answer = signInUser(email.value, password.value);
//   // console.log(answer);
//   createAccount(email.value, password.value, 'Gosha');
// });

// const btn7 = document.querySelector('.btn7');
// btn7.addEventListener('click', () => {
//   const email = document.querySelector('.email');
//   console.log(email.value);
//   const password = document.querySelector('.password');
//   console.log(password.value);
//   const answer = authAccount(email.value, password.value);
//   console.log(answer);
// });

// const btn8 = document.querySelector('.btn8');
// btn8.addEventListener('click', async () => {
//   const email = document.querySelector('.email');
//   console.log(email.value);
//   const password = document.querySelector('.password');
//   console.log(password.value);
//   const answer = updateShopList(email.value, password.value);
//   console.log(answer);
// });

//===========================================================================================================

import axios from 'axios';

import { getCategoryList, getTopBooks, getCategory, getBookById } from './js/api-books';
import { initTheme, switchTheme } from './js/theme-switcher';

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

// const baseUrl = 'https://books-backend.p.goit.global/';
// const categoryListUrl = 'books/category-list';
// const topBooksUrl = 'books/top-books';
// const categoryUrl = 'books/category';
// const idUrl = 'books/';

// const getCategoryList = async () => {
//   return await axios.get(baseUrl + categoryListUrl);
// };

// const getTopBooks = async () => {
//   return await axios.get(baseUrl + topBooksUrl);
// };

// const getCategory = async categoryName => {
//   const paramsObj = {
//     category: categoryName,
//   };
//   const params = new URLSearchParams(paramsObj);
//   return await axios.get(`${baseUrl}${categoryUrl}/?${params}`);
// };

// const getBookById = async id => {
//   return await axios.get(`${baseUrl}${idUrl}/${id}`);
// };

btn1.addEventListener('click', () => console.log(getCategoryList()));
btn2.addEventListener('click', () => {
  getTopBooks().then(res => {
    console.log(res.data[0].books[0].book_image);
  });
  // console.log(getTopBooks())
});
btn3.addEventListener('click', () => console.log(getCategory('Hardcover Fiction')));
btn4.addEventListener('click', () => console.log(getBookById('643282b2e85766588626a0e0')));

initTheme();
btn5.addEventListener('click', () => switchTheme());

import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '38497169-7bd98392067bf2a90cc1b3ff8';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('#search-form');
const searchQuery = document.querySelector('[name="searchQuery"]');
const scrollUp = document.querySelector('.scroll-up');
scrollUp.hidden = true;

const COUNT_IN_PAGE = 40;
let page = 1;
let max_pages = page;
let messEndSearchResult = false;

const option = {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionsData: 'alt',
};

const lightbox = new SimpleLightbox('.gallery a', option);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  removeChildren(gallery);
  page = 1;
  messEndSearchResult = false;
  if (searchQuery.value.trim().length == 0) {
    Notiflix.Notify.failure('The search field must be filled.');
    return;
  }
  getImages()
    .then(responce => render(responce.data))
    .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
});

const render = items => {
  max_pages = Math.ceil(items.totalHits / COUNT_IN_PAGE);
  if (items.hits.length == 0) {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
  }

  Notiflix.Notify.success(`Hooray! We found ${items.totalHits} images.`);

  if (items.totalHits > 0) {
    const markup = items.hits
      .map(item => {
        return `  <a class="photo-card" href="${item.largeImageURL}">
                    <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
                    <div class="info">
                      <p class="info-item">
                        <b>Likes</b>
                        ${item.likes}
                      </p>
                      <p class="info-item">
                        <b>Views</b>
                        ${item.views}
                      </p>
                      <p class="info-item">
                        <b>Comments</b>
                        ${item.comments}
                      </p>
                      <p class="info-item">
                        <b>Downloads</b>
                        ${item.downloads}
                      </p>
                    </div>
                  </a>`;
      })
      .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  }
};

const removeChildren = container => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const scrollingUpadating = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;
  if (documentHeight - (windowHeight + scrollPosition) <= 100) {
    if (max_pages > page) {
      page++;
      getImages()
        .then(responce => render(responce.data))
        .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
    } else {
      if (!messEndSearchResult) {
        messEndSearchResult = true;
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
      }
    }
  }

  if (document.documentElement.clientHeight < document.documentElement.scrollTop) {
    scrollUp.hidden = false;
  } else {
    scrollUp.hidden = true;
  }
};

const throttledScrrolling = throttle(() => {
  scrollingUpadating();
}, 500);

document.addEventListener('scroll', event => {
  throttledScrrolling();
  // var scrollHeight = Math.max(
  //   document.body.scrollHeight,
  //   document.documentElement.scrollHeight,
  //   document.body.offsetHeight,
  //   document.documentElement.offsetHeight,
  //   document.body.clientHeight,
  //   document.documentElement.clientHeight
  // );
  // var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // debug.textContent = `scrollHeight=${scrollHeight}, scrollTop=${scrollTop}, clientHeight=${document.documentElement.clientHeight}`;
  // if (scrollTop + document.documentElement.clientHeight + 1 >= scrollHeight) {
  //   if (max_pages > page) {
  //     page++;
  //     getImages()
  //       .then(responce => render(responce.data))
  //       .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
  //   } else {
  //     Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  //   }
  // }
  // if (
  //   Math.ceil(document.documentElement.scrollTop + document.documentElement.clientHeight) >=
  //   Math.floor(document.documentElement.getBoundingClientRect().height)
  // ) {
  //   if (max_pages > page) {
  //     page++;
  //     getImages()
  //       .then(responce => render(responce.data))
  //       .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
  //   } else {
  //     Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  //   }
  // }
  // if (document.documentElement.clientHeight === Math.floor(document.documentElement.getBoundingClientRect().bottom)) {
  //   if (max_pages > page) {
  //     page++;
  //     getImages()
  //       .then(responce => render(responce.data))
  //       .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
  //   } else {
  //     Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  //   }
  // }
  // debug.textContent = `scrollTop=${document.documentElement.scrollTop}, clientHeight=${document.documentElement.clientHeight}, scrollHeight=${document.documentElement.scrollHeight}`;
  // debug.textContent = `getBoundingClientRect().bottom=${Math.floor(
  //   document.documentElement.getBoundingClientRect().bottom
  // )}, clientHeight=${document.documentElement.clientHeight}`;
  // const height = document.body.offsetHeight;
  // const screenHeight = window.innerHeight;
  // const scrolled = window.scrollY;
  // if (height - screenHeight - scrolled < 100) {
  //   if (max_pages > page) {
  //     page++;
  //     getImages()
  //       .then(responce => render(responce.data))
  //       .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
  //   } else {
  //     Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  //   }
  // }
  // debug.textContent = `height=${height}, screenHeight=${screenHeight}, scrolled=${scrolled}, scrollTop=${document.documentElement.scrollTop}`;
  // if (document.documentElement.clientHeight === Math.floor(document.documentElement.getBoundingClientRect().bottom)) {
  //   if (max_pages > page) {
  //     page++;
  //     getImages()
  //       .then(responce => render(responce.data))
  //       .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
  //   } else {
  //     Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  //   }
  // }
  // const windowHeight = window.innerHeight;
  // const documentHeight = document.documentElement.scrollHeight;
  // const scrollPosition = window.scrollY;
  // if (documentHeight - (windowHeight + scrollPosition) <= 100) {
  //   if (max_pages > page) {
  //     page++;
  //     getImages()
  //       .then(responce => render(responce.data))
  //       .catch(error => Notiflix.Notify.failure(`Something went wrong: ${error.code} ${error.message}`));
  //   } else {
  //     Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  //   }
  // }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const getImages = async () => {
  const paramsObj = {
    key: API_KEY,
    q: searchQuery.value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: COUNT_IN_PAGE,
    page: page,
  };
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`https://pixabay.com/api/?${params}`);
};
