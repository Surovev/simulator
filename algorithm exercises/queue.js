class Queue {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Ставит элемент в очередь.
	// Возвращает новый размер очереди.
	enqueue(value) {
		const node = { value, next: null, prev: null };
		if (this.size === 0) {
			this.tail = this.head = node;

		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}


		return this.size++;
	}

	// Убирает элемент из очереди.
	// Если очередь пустая, кидает ошибку.
	// Возвращает удалённый элемент.
	dequeue() {
		if (this.size === 0) {
			throw new Error("ошибочка вышла");
		}
		const ret = this.head;
		this.head = this.head.prev;
		this.size--;
		return ret;
	}

	// Возвращает элемент в начале очереди.
	peek() {
		return this.head;
	}

	// Если очередь пустая, возвращает true. В противном случае –– false.
	isEmpty() {
		return this.size === 0;
	}
}
