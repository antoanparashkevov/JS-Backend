const data = [
    {
        id:'1',
        name:"Windshield Wiper",
        price: 49.5
    },
    {
        id:'2',
        name: 'Headlight bulb',
        price: 15.7
    }
]

function getList() {
    return data
}

function getById(id) {
    return data.find((product)=>product.id === id)
}

module.exports = {
    getList,
    getById
}