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
    mail: 'adam@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Elijah M',
    mail: 'adam@example.com',
    password: bcrypt.hashSync('123456', 10)
  },

]

export default users