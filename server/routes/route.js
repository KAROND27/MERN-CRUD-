const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/add', async (req, res) => {
  try {
    console.log('Body ===> ', req.body);

    const value = new Data(req.body);
    const myData = await value.save();
    console.log('Data ', myData);
    res.status(201).json({ success: true });
  } catch (error) {
    console.log('ERror ', error);
    res.status(400).send(error);
  }
});

router.get('/all', async (req, res) => {
  try {
    const collection = await Data.find({});
    console.log('Data ', collection);
    res.status(201).json(collection);
  } catch (error) {
    console.log('ERror ', error);
    res.status(400).send(error);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const update = await Data.findById(req.params.id);

    res.status(201).json(update);
  } catch (error) {
    console.log('ERror ', error);
    res.status(400).send(error);
  }
});
router.put('/:id', async (req, res) => {
  try {
    const Id = req.params.id;
    const user = await Data.findById(Id);
    console.log('user --- >', user);
    if (!user) {
      return res.status(404).json({ message: 'not found' });
    }

    const updatedUser = await Data.findByIdAndUpdate(Id, req.body, { new: true });

    res.status(200).json({ updatedUser });
  } catch (error) {
    console.log('ERror ', error);
    res.status(400).send(error);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const DEL = await Data.findByIdAndDelete(req.params.id);
    res.status(201).json(DEL);
  } catch (error) {
    console.log('ERror ', error);

    res.status(400).send(error);
  }
});

module.exports = router;
