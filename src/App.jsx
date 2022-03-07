import { Container } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';
import Navbar1 from './components/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <>
    <Navbar1 />
    <Container mt="5" maxW="container.sm">
      <AddTodo mt="5"/>
      <TodoList />
      <VisibilityFilter />
    </Container>
    </>
  );
}

export default App;
