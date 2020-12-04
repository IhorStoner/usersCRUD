const { Router } = require('express');
require('express-async-errors')
const userValidator = require('../middlewares/userValidator');
const UserModel = require('../models/userModel')
const usersRouter = Router();

//get all studets
usersRouter.get('/', async (req,res) => {
  const users = await UserModel.find({});
  res.json(users)
})

//check email
usersRouter.get('/is_exist', async (req, res) => {
  const result = await UserModel.exists({ email: req.query.email });
  res.send({ is_exist: result })
});

// add new User
usersRouter.post('/', userValidator, async(req,res) => {
  const newUser = new UserModel(req.body);
  const { _id } = await newUser.save();
  res.status(201).send(newUser);
})

// getStudentById
usersRouter.get('/:userId', async (req,res) => {
  const selectedUser = await UserModel.findById(req.params.userId);

  if(!selectedUser) {
    res.status(400).send({ error: 'User not found' });
    return
  } else {
    res.status(200).send(selectedUser);
  }
})

//changeUserById
usersRouter.put('/:userId',userValidator, async (req,res) => {
  const updateUser = await UserModel.findByIdAndUpdate(req.params.userId, req.body)
  res.status(200).send(updateUser)
})

//deleteUserById
usersRouter.delete('/:userId', async (req,res) => {
  const deletedUser = await UserModel.findByIdAndDelete(req.params.userId)
  res.status(200).send(deletedUser)
})


module.exports = usersRouter;