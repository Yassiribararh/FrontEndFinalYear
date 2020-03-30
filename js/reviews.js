"use strict";

//script for reviews section (() => {
(() => {
  // all existing code goes here
  const listElement = document.getElementById('reviews');

  function addItem(item) {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;
                                              // <- new
    listElement.appendChild(itemElement);

  };


   // list array using for Each
  const list = ['User01: Great site', 'User02: YNWA!', 'User03: Easy to navigate!'];
  list.forEach(item => { addItem(item); } );


  // JavaScript handles to our new elements
  const newItem = document.getElementById('newItem');
  const addBtn = document.getElementById('addBtn');
  const clearBtn = document.getElementById('clearBtn');

  //saving the list
  function save() {
    const items = [...listElement.childNodes];
    if(items.length) {
      const list = items.map(item => {
        return item.textContent.slice(0, -1);
      });
      localStorage.setItem('reviews-list', list);
    } else {
      localStorage.removeItem('reviews-list');
    }
  }
 //lOAD REVIEWS LIST
 function load() {
    const reviewsList = localStorage.getItem('reviews-list');
    if(reviewsList) {
      addList(reviewsList.split(','));
    }
  }

  // Event listeners
  addBtn.addEventListener('click', ev => {
    newItem.value.split(',').forEach(v => {
      if(v) {
        addItem('Anonymous User: ' +  v );
      }
    });
    newItem.value = null;
    save();
  });

  addBtn.addEventListener('click', ev => {
    addItem(newItem.value.split(','));
    newItem.value = null;
    save();
  });



  // Saving data for later use
    window.addEventListener('beforeunload', save);

    // Loading data from local storage
    window.addEventListener('DOMContentLoaded', load);

    window.addEventListener('storage', ev => {
      if(ev.key == "reviews-list") {
        clearList();
        load();
      }
    })

})();
