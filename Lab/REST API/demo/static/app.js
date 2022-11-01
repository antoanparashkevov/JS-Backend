let list = document.querySelector('ul')
document.querySelector('button').addEventListener('click', async()=>{
    const res = await fetch('/data', {
        method: 'GET'
    })
    const data = await res.json();
    for(let item of data) {
        const li = document.createElement('li')
        li.textContent = item.name;
        list.appendChild(li)
    }
})