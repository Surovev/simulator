class Stack {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Кладёт элемент на стек.
	// Возвращает новый размер стека.
	push(value) {
		const node = { value, next: null, prev: null };
		if (this.size === 0) {
			this.head = this.tail;
			this.tall = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}


		return this.size++;
	}

	// Убирает элемент со стека.
	// Если стек пустой, кидает ошибку.
	// Возвращает удалённый элемент.
	pop() {
		if (this.size === 0) {
			throw new Error("Многовато");
		}
		const ret = this.tail;
		this.tail = this.tail.prev;
		this.size--;
		return ret;
	}

	// Возвращает верхний элемент стека без его удаления.
	peek() {
		return this.tail;
	}

	// Если стек пуст, возвращает true. В противном случае –– false.
	isEmpty() {
		return this.size === 0;
	}
}
