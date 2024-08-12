import axios from 'axios';
import { api } from '../actions/api';
import { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

export const StudentData = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/students`); // Corrected this line
      setStudents(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Student Data</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Course</Th>
          </Tr>
        </Thead>
        <Tbody>
          {error ? (
            <Tr>
              <Td colSpan={3}>{error}</Td>
            </Tr>
          ) : (
            students.map((student) => (
              <Tr key={student.id}>
                <Td>{student.name}</Td>
                <Td>{student.email}</Td>
                <Td>{student.course}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
