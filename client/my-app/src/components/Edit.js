import { FormControl, FormGroup, InputLabel, input, styled } from '@mui/material';
import Button from '@mui/material/Button';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

const Edit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [religion, setReligion] = useState('');
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const Navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const Data = async (id) => {
    // e.preventDefault();
    // const newEntry = { name: name, email: email, religion: religion };
    //setAllentry([...allentry, newEntry]);
    // Navigate('/all');
    //console.log(allentry);
    //setName('');
    //setEmail('');
    //setReligion('');
    //console.log(allentry);
    //try {
    //const res = await axios.put(`http://localhost:5000/edit/${id}`);
    //const del = await res.data;
    //setAllentry(res.allentry);
    //console.log(...allentry);
    //} catch (error) {
    // console.log(error);
    // }
    try {
      const res = await axios.get(`http://localhost:5000/${id}`);
      // console.log(res.data);
      setUser(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
      setReligion(res.data.religion);

      //setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const editData = async (id) => {
    console.log(id);
    try {
      const res = await axios.put(`http://localhost:5000/${id}`, {
        name: name,
        email: email,
        religion: religion,
      });

      setData(res.data);
      Navigate('/all');
      console.log(data);

      //setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Data(id);
  }, []);

  return (
    <>
      <Container>
        <h1>Edit Users</h1>
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
          <Tap variant='contained' onClick={() => editData(id)}>
            Edit
          </Tap>
        </FormControl>
      </Container>
    </>
  );
};

export default Edit;
