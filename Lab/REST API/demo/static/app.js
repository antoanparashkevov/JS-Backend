let list = document.querySelector('ul')
const loadButton = document.querySelector('#load');
const form = document.querySelector('form')

loadButton.addEventListener('click', async()=>{
    const res = await fetch('/data', {
        method: 'GET'
    })
    const data = await res.json();
    console.log(data)
    for(let item of data) {
        const li = document.createElement('li')
        li.textContent = `${item.name} - ${item.desc}`;
        list.appendChild(li)
    }
})

form.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target)//event.target is the form
    const data = Object.fromEntries(formData);
    fetch('/data',{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
})