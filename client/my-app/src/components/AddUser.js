import { FormControl, FormGroup, InputLabel, input, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { height } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from './Api';
const Container = styled(FormGroup)`
  width: 30%;
  margin: 3% auto 0 auto;
  background-color: #eb3434;
  & > div {
    margin: 5%;
    padding: 9%;
  }
`;
const Tap = styled(Button)`
  width: 30%;
  height: 6vh;
  margin: auto;
  background-color: #3e0e9e;
`;

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [religion, setReligion] = useState('');
  const [allentry, setAllentry] = useState([]);
  const Navigate = useNavigate();
  const Click = async (e) => {
    e.preventDefault();
    const newEntry = { name: name, email: email, religion: religion };
    setAllentry([...allentry, newEntry]);
    Navigate('/all');
    console.log(allentry);
    setName('');
    setEmail('');
    setReligion('');
    console.log(allentry);
    const res = await fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        religion: religion,
      }),
    });
  };
  return (
    <>
      <Container>
        <h1>Add Users</h1>
        <FormControl>
          <InputLabel>Name:</InputLabel>
          <input name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Email:</InputLabel>
          <input
            name='email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Religion:</InputLabel>
          <input
            name='name'
            type='text'
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Tap variant='contained' onClick={Click}>
            ADD
          </Tap>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
