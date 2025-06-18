import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Alert
} from '@mui/material';

function StudentCourses() {
  const [studentId, setStudentId] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCourses([]);
    setError('');

    try {
      const res = await fetch(`/api/student/${studentId}`);
      if (!res.ok) {
        throw new Error('Student not found or backend error');
      }
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Student Courses Lookup
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <TextField
          fullWidth
          label="Enter Student ID"
          variant="outlined"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          type="number"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Fetch Courses
        </Button>
      </form>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {courses.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="courses table">
            <TableHead>
              <TableRow>
                <TableCell><strong>Course Name</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default StudentCourses;
