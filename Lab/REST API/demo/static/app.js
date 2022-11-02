let list = document.querySelector('ul')
const loadButton = document.querySelector('#load');
const form = document.querySelector('form')
list.addEventListener('click',deleteItem)

loadButton.addEventListener('click', async()=>{
    const res = await fetch('/data', {
        method: 'GET'
    })
    const data = await res.json();
    console.log(data)
    list.replaceChildren();//for each click to remove the existing li elements.
    for(let item of data) {
       createRow(item)
    }
})

function createRow(item) {
    const li = document.createElement('li')
    li.id = item.id;
    li.textContent = `${item.name} - ${item.desc}`;
    const delBtn = document.createElement('a');
    delBtn.href='javascript:void(0)'
    delBtn.textContent = ' Delete '
    li.appendChild(delBtn)
    list.appendChild(li)
}

form.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target)//event.target is the form
    const data = Object.fromEntries(formData);
   const res = await fetch('/data',{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const item  = await res.json();
   createRow(item)
})

async function deleteItem(event) {
    if(event.target.tagName === 'A') {
        const id = event.target.parentNode.id;
      const res = await fetch('/data/' + id, {
            method: 'delete'
        }) 
        if(res.ok) {
        event.target.parentNode.remove()
        }
    }
}