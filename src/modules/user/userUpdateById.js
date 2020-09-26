import User from './Model';

export default function userUpdateById(req, res) {
  const id = req.params.userId;
  User.updateOne({ _id: id }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}
