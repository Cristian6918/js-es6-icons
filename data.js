const array=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//-----------------------------------//
const animal=array.filter(array=>array.type==='animal');
const user=array.filter(array=>array.type==='user');
const vegetable=array.filter(array=>array.type==='vegetable');
const container=document.querySelector('#body-content');
const filterButton=document.querySelector('#filter-button');
const selection=document.querySelector('#ct-select');

// button that filter the elements
filterButton.addEventListener('click',function(){
	const selectedValue=selection.value;
	console.log(selectedValue);
	switch(selectedValue){
		case 'all':
			filterCards(array);
			break;
		case 'user':
			filterCards(user);
			break;
		case 'animal':
			filterCards(animal);
			break;
		case 'vegetable':
			filterCards(vegetable);
			break;
	}
	
});

// first init with all the elements
filterCards(array);



// Function that Create only the selected Cards
function filterCards(x){
	container.innerHTML='';
	x.forEach(element => {
		createCard(element);

	});
}



// Funcition that creates The card
function createCard(element){
	container.innerHTML+=`<div class="ct-card col-2">
	<span><i class="fa-solid ${element.prefix}${element.name}" style='color:${element.color}'></i></span>
	<span>${element.name}</span>
</div>`;	
}









// <div class="card d-flex">
//                 <span><i class="fa-solid fa-dog"></i></span>
//                 <span>DOG</span>
//             </div>