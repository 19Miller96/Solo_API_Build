fetch('https://grocerybear.com/getitems')
.then(res => res.json())
.then(data => console.log(data))