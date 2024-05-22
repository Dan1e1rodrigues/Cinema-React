const users = [];

const authService = {
  register: (email, password) => {
    return new Promise((resolve, reject) => {
      // Verifica se o usuário já existe
      const userExists = users.some(user => user.email === email);
      if (userExists) {
        reject(new Error('User already exists'));
      } else {
        // Adiciona o novo usuário
        users.push({ email, password });
        resolve();
      }
    });
  },
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      // Verifica se as credenciais estão corretas
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  }
};

export default authService;