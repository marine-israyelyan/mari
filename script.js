let user1  = {
	   name: 'Mick',
	   surname: 'Mayers',
	   address:{
			street: '76 Camptown', 
			city: 'Los Angeles',
			state: 'California',
	   }
}	   
delete user1.adress;
console.log(user1.adress?.street)