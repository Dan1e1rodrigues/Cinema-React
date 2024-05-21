import bcrypt from 'bcryptjs';

const authService = {
  register: async (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    localStorage.setItem('users', JSON.stringify(users));
  },
  login: async (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('user', JSON.stringify({ email }));
  },
  logout: () => {
    localStorage.removeItem('user');
  },
  getUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  }
};

export default authService;