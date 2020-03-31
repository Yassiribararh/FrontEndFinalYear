"use strict";


function submit() {
  alert("Thanks! your message has been submited");
}

//script for clicking the submit button
const submited = document.getElementById('submit');

submited.addEventListener("click", submit);
//script for reviews section (() => {
(() => {
  // all existing code goes here
  const listElement = document.getElementById('reviews');

  //function to add html item
  function addItem(item) {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    itemElement.appendChild(deleteButton);
    // Event listener
    deleteButton.addEventListener('click', ev => { // <- new
      listElement.removeChild(itemElement);        // <- new
    });
    listElement.appendChild(itemElement);
  };

  // list array using for Each
  const list = ['User01: Great site, easy access to pages', 'User02: YNWA! We love liverpool in Morocco', 'User03: Easy to navigate! love how the news are up to date!'];
  list.forEach(item => { addItem(item); } );


  function clearList() {
    while(listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
  }

  // alert the user that his review was submited
  function greeting() {
    alert("Thanks! your review has been submited");
  }

  function renderList(list) {
    list.forEach(addItem);
  }
  // JavaScript handles to our new elements
  const newItem = document.getElementById('newItem');
  const addBtn = document.getElementById('addBtn');
  const clearBtn = document.getElementById('clearBtn');

  // Event listeners
  addBtn.addEventListener('click', ev => {
    newItem.value.split(',').forEach(v => {
      if(v) {
        addItem('Anonymous User: ' +  v );
      }
    });
    newItem.value = null;
  });

  clearBtn.addEventListener('click', ev => {
    clearList();
  });

  addBtn.addEventListener("click", greeting);

  //Saving the list
  window.addEventListener('beforeunload', ev => {
    const items = [...listElement.childNodes];
    if(items.length) {
      const list = items.map(item => {
        return item.textContent.slice(0, -1);
      });
      localStorage.setItem('review-list', list);
    } else {
      localStorage.removeItem('review-list');
    }
  });

  //Event Listener
  window.addEventListener('DOMContentLoaded', ev => {
    const reviewList = localStorage.getItem('review-list');
    if(reviewList) {
      clearList();
      renderList(reviewList.split(','));
    }
  });

  //Upgrade the interface
  newItem.addEventListener("keyup", ev => {
    if (ev.key === "Enter") {
      addBtn.click();
    }
  });

})()
