let list = document.querySelector('ul')
const loadButton = document.querySelector('#load');
const form = document.querySelector('form')
list.addEventListener('click',itemAction)

let currentId = null;
let editMode = false;

loadButton.addEventListener('click',  loadProducts)

async function loadProducts() {
    const res = await fetch('/data', {
        method: 'GET'
    })
    const data = await res.json();  
    console.log(data)
    list.replaceChildren();//for each click to remove the existing li elements.
    for(let item of data) {
        createRow(item)
    }
}

function createRow(item) {
    const li = document.createElement('li')
    li.id = item.id;
    li.textContent = `${item.name} - ${item.desc}`;
    createAction(li, '[Delete]', 'delete')
    createAction(li, '[Edit]', 'edit')
    list.appendChild(li)
}

function createAction(el, label, classType) {
    const btn = document.createElement('a');
    btn.href='javascript:void(0)'
    btn.textContent = label
    btn.className = classType
    el.appendChild(btn)
}
 
form.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target)//event.target is the form
    const data = Object.fromEntries(formData);
    
    if(editMode) {
        const res = await fetch('/data/' + currentId, {
            method: 'put',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        if(res.ok) {
            await loadProducts()
            form.reset();
            currentId = null;
            editMode = false;
        }
    }else {
        const res = await fetch('/data',{
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const item  = await res.json();
        createRow(item)
    }
})

async function itemAction(event) {
    if(event.target.tagName === 'A') {
        const id = event.target.parentNode.id;
        if(event.target.className === 'delete'){
            await deleteItem(id)
        } else if(event.target.className === 'edit') {
             editItem(id)
        }
    }
}
async function deleteItem(id) {
        const res = await fetch('/data/' + id, {
            method: 'delete'
        })
        if(res.ok) {
            document.getElementById(id).remove()
        }
}

async function detailsItem(id) {
    const res = await fetch('/data/' + id)
    if(res.ok) {
        const data = await res.json();
        console.log('Current product', data)
        return data;
    }
}

async function editItem(id) {
    const item = await detailsItem(id)
   form.querySelector("[name='name']").value = item.name
   form.querySelector("[name='desc']").value = item.desc
    currentId = id;
    editMode = true;
}