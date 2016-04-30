import RaziloBind from 'razilobind'

/**
 * Hello World Sample Application
 * Lets keep it ES6 sir, bind to your class instance!
 */
export default class TodoApp {
    constructor(element) {
		// set up properties
		this.todos = [];

		// bind it, just bind it ;)
		let rb = new RaziloBind();
		rb.bind(element, this);
	}

	addTodo() {
		this.todos.push({'text': '', 'toggle': true});
	}

	toggleTodo(event, todo) {
		todo.toggle = !todo.toggle;
	}

	removeTodo(event, key) {
		this.todos.splice(key, 1);
	}
}
