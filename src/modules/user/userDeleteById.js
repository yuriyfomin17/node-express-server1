import User from './Model';

export default function userDeleteById(req, res) {
  const id = req.params.userId;
  User.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete error');
    });
}
