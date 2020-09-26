import User from './Model';

export default function userGetById(req, res) {
  const id = req.params.userId;
  User.findById(id)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get by ID error');
    });
}
