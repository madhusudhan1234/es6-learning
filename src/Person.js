class Person{
	constructor(name)
	{
		this.name = name;
	}
	
	greet()
	{
		return this.name + ' Says Hello';
	}
}

console.log(new Person('Madhu sudhan').greet());