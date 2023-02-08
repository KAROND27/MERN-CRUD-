import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';

const Tablestyle = styled(Table)`
  width: 60%;
  margin: 10px auto auto auto;
`;
const Thead = styled(TableRow)`
  background-color: grey;
  & > th {
    color: white;
  }
`;

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [remove, setRemove] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/all');
      console.log(res);
      const Value = await res.data;
      setData(Value);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/${id}`);

      //const del = await res.data;
      setRemove(res);
      getData();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Tablestyle>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>RELIGION</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {data.map((curelm, index) => (
            <TableRow>
              <TableCell>{curelm._id}</TableCell>
              <TableCell>{curelm.name}</TableCell>
              <TableCell>{curelm.email}</TableCell>
              <TableCell>{curelm.religion}</TableCell>
              <Button
                variant='contained'
                style={{ marginRight: '20px' }}
                component={Link}
                to={`/edit/${curelm._id}`}
              >
                EDIT
              </Button>
              <Button variant='contained' onClick={() => deleteUser(curelm._id)}>
                DELETE
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Tablestyle>
    </>
  );
};

export default AllUsers;
