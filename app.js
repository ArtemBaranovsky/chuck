//import 'regenerator-runtime/runtime';
  import axios from 'axios';
import { resolve } from 'parcel-bundler/lib/utils/config.js'

const BASE_URL = 'https://api.chucknorris.io/jokes';
const API_TYPE = {
  'search': 'search?query=',
  'random': 'random',
  'category': 'random?category=',
  'categories': 'categories'
};


/**
 *
 * @param type (search|random|category|categories)
 * @param query
 * @param {string} type
 */
async function getJokes (type = 'random', query = '') {
    // console.log(`${BASE_URL}/${API_TYPE[type]}${query}`);
  // const { data } = await axios.get(`${BASE_URL}/${API_TYPE[type]}${query}`);
  // // console.log (data);
  // return data;
  // await axios.get(`${BASE_URL}/${API_TYPE[type]}${query}`)
  //     .then( (response) => {
  //       console.log(response.data);
  //       var result = response.data;
  //       return result;
  //       // console.log(`GET: Here's the list of jokes`, jokes);
  //     })

  // let response = await axios.get('https://api.chucknorris.io/jokes/categories');
  //
  // let result = await response.data
  // console.log(categories)
  // return result;
  // let result = fetch('https://api.chucknorris.io/jokes/categories')
  //     .then(response => {
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .catch( (err) => {
  //       console.log(err);
  //     })
  //     // .then(response => {
  //     //   return response.data;
  //     // });
  // console.log(result);
  // return result;
}

document.querySelector('[type="submit"]').addEventListener(
  'click', event => {
    event.preventDefault();
    let searchData = document.querySelector('.search');
    console.log(searchData.value);
    // getJokes('search' ,searchData.value)
    // let categories = getJokes('categories');
    // console.log(categories);
  }/*, false*/
); // addEventListener(()=>{})

//const createTodoElement = item => {
//  const todoElement = document.createElement('li');
//  todoElement.id = item.id;
//  todoElement.appendChild(document.createTextNode(item.title));
//  todoElement.onclick = async event => await removeTodoElement(event, todoElement);
//  return todoElement;
//};
//
//const updateTodoList = todoItems => {
//  const todoList = document.querySelector('ul');
//  if (Array.isArray(todoItems) && todoItems.length > 0) {
//    todoItems.map(todoItem => {
//      todoList.appendChild(createTodoElement(todoItem));
//    });
//  } else if (todoItems) {
//    todoList.appendChild(createTodoElement(todoItems));
//  }
//};
//
//const main = async () => {
//  updateTodoList(await getTodoItems());
//};
//
//main();
//
//const form = document.querySelector('form');
//form.addEventListener('submit', async event => {
//  event.preventDefault();
//  const title = document.querySelector('#new-todos__title').value;
//  const todo = {
//    userId: 1,
//    title: title,
//    completed: false
//  };
//  const submitTodoItem = await addTodoItem(todo);
//  updateTodoList(submitTodoItem);
//});
//
//export const addTodoItem = async todo => {
//  try {
//    const response = await axios.post(`${BASE_URL}/todos`, todo);
//    const newTodoItem = response.data;
//    console.log(`Added a new Todo!`, newTodoItem);
//    return newTodoItem;
//  } catch (errors) {
//    console.error(errors);
//  }
//};
//
//export const deleteTodoItem = async id => {
//  try {
//    const response = await axios.delete(`${BASE_URL}/todos/${id}`);
//    console.log(`Deleted Todo ID: `, id);
//    return response.data;
//  } catch (errors) {
//    console.error(errors);
//  }
//};
//
//const removeTodoElement = async (event, element) => {
//  event.target.parentElement.removeChild(element);
//  const id = element.id;
//  await deleteTodoItem(id);
//};
//

function each(arr, callback) {
   arr.forEach(function (el, i) {
       callback(el, i, arr);
   })
}

each(document.querySelectorAll('input[type="radio"]'), () => {
    addEventListener("change", (el) => {
        console.log(el.target.value);
        if (el.target.value !== 'search') {
          document.querySelector('.search').style.display = 'none';
        }
        if (el.target.value === 'search') {
          document.querySelector('.search').style.display = 'flex';
        }

        if (el.target.value !== 'categories') {
          document.querySelector('.nav-panel').style.display = 'none';
        }
        if (el.target.value === 'categories') {
          document.querySelector('.nav-panel').style.display = 'flex';
        }
        // if (el.target.value !== undefined) {
        //         let inputValue = el.target.value; // $(this).attr()
        //         let targetBox = document.querySelectorAll("#" + inputValue);
        //         // console.log(inputValue, targetBox);
        //         // console.log(document.querySelectorAll(".select-type")[0]);
        //        each(document.querySelectorAll(".select-type")[0],
        //            (select) => {
        //                // console.log(selectEl);
        //                selectEl.filter(
        //                    (item) => { item !== targetBox }
        //                ).style.display = 'none';
        //            }/*, (el)=>{ el.style.display = 'none'; }*/);  // hide()
        // //        document.querySelector(targetBox).style.display='block'// .show();
        // //        alert("Radio button " + inputValue + " is selected");
        // }
    })
});
// console.log(getJokes('categories'));

document.addEventListener("DOMContentLoaded", async function (event) {
  // let categories  = await getJokes('categories');
  // console.log(categories)
  // const navPanel = document.createElement('nav-panel');
  // navPanel.categories = categories;
  // document.querySelector('.categories').appendChild(navPanel);

});

//                var elements = document.querySelectorAll(selector)
//                Array.prototype.forEach.call(elements, function(el, i) {
//                  el.setAttribute(attr, setterFunction.call(el, i, attr))
//                })

// this.shadowRoot.querySelector('.nav-panel').categories = this.getJokes('categories');
// label for="caterogies"

  // var NavPanel = document.createElement('nav-panel');
  // document.querySelector('[for="caterogies"]').appendChild(NavPanel);
// document.querySelector('.nav-panel').categories = getJokes('categories');

