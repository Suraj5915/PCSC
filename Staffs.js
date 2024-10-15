import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import axios from 'axios';

const Staffs = () => {
  const [staffs, setStaffs] = useState([]);
  const [newStaff, setNewStaff] = useState({ name: '', position: '' });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Fetch staff data from an API
    axios
      .get('https://api.example.com/staffs') // Replace with your actual API endpoint
      .then((response) => {
        setStaffs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching staff data:', error);
      });
  }, []);

  const handleChange = (e) => {
    setNewStaff({ ...newStaff, [e.target.name]: e.target.value });
    setIsSaved(false); // Reset save state on change
  };

  const addStaff = () => {
    axios
      .post('https://api.example.com/staffs', newStaff) // Replace with your actual API endpoint
      .then((response) => {
        setStaffs([...staffs, response.data]);
        setNewStaff({ name: '', position: '' }); // Reset form after saving
        setIsSaved(true); // Set save state to true
      })
      .catch((error) => {
        console.error('Error adding staff:', error);
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Staff List
      </Typography>

      {/* Form for Adding Staff */}
      <form noValidate autoComplete="off" style={{ marginBottom: 20 }}>
        <TextField
          label="Staff Name"
          name="name"
          value={newStaff.name}
          onChange={handleChange}
          style={{ marginRight: 10 }}
        />
        <TextField
          label="Position"
          name="position"
          value={newStaff.position}
          onChange={handleChange}
          style={{ marginRight: 10 }}
        />
        <Button
          variant="contained"
          color={isSaved ? 'secondary' : 'primary'} // Change color based on save state
          onClick={addStaff}
        >
          {isSaved ? 'Saved' : 'Add Staff'} {/* Button text changes based on save state */}
        </Button>
      </form>

      {/* Table for Displaying Staff */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staffs.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>{staff.id}</TableCell>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Staffs;
