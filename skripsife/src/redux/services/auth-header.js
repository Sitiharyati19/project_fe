export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      // eslint-disable-next-line prefer-template
      return { Authorization: 'Bearer ' + user.token };
    // eslint-disable-next-line no-else-return
    } else {
      return {};
    }
  }