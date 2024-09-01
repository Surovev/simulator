
function reverse(head) {

	if (head === null) return;

	let currentNode = head;
	let prevNode = null;
	let nextNode = null;

	while (currentNode) {
		nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
		nextNode = null;
	}
	head = prevNode;

	return head;
}
