function chatroomStatus (users) {
    if (users.length === 0) {
      return 'no one online';
    }
    if (users.length === 1) {
      return `${users[0]} online`;
    }
    if (users.length === 2) {
      return `${users[0]} and ${users[1]} online`;
    }
    if (users.length > 2) {
      return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
    }
  }
  