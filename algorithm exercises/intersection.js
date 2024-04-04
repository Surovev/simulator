function intersection(user1, user2) {
    const result = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < user1.length && i2 < user2.length) {
        const leftOffset = Math.max(user1[i1][0], user2[i2][0]);
        const rightOffset = Math.min(user1[i1][1], user2[i2][1]);

        if (rightOffset > leftOffset) {
            result.push([leftOffset, rightOffset]);
        }

        user1[i1][1] < user2[i2][1] ? i1++ : i2++;
    }

    return result;
}
console.log(intersection(
	[[8, 12], [17, 22]],
	[[5, 11], [14, 18], [20, 23]]
));
 // [[8, 11], [17, 18], [20, 22]]

intersection(
	[[9, 15], [18, 21]],
	[[10, 14], [21, 22]]
) // [[10, 14]]
