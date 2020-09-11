const countNames = [];

export default function info(req, res) {
  countNames.push(req.body.name);
  res.status(200).json('INFO!' + countNames);
}

export const a = 123;
