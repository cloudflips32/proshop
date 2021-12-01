import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Adam S',
    email: 'adam@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Elijah M',
    email: 'elijah@example.com',
    password: bcrypt.hashSync('123456', 10)
  },

]

export default users