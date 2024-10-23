import React from 'react';
import {  Container, Card, Button } from 'react-bootstrap';

const Inicio: React.FC = () => {
  return (
    <>
       
        <Container>
          <h1>Bienvenido a Free Mind</h1>
          <p>Plataforma de administración de revistas de programación.</p>
        </Container>
      

      <Container>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Gestión de Revistas</Card.Title>
            <Card.Text>
              Administra todas tus revistas de manera eficiente con nuestras herramientas.
            </Card.Text>
            <Button variant="primary">Saber más</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Inicio;
