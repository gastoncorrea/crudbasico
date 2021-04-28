import React from 'react';
import { Container, Form } from 'react-bootstrap';

const AgregarProducto = () => {
    return (
        <Container>
            <Form className='my-5'>
                <h3 className='mb-3 text-center'>Agregar Producto Nuevo</h3>
                <Form.Group>
                    <Form.Label>Nombre del Producto *</Form.Label>
                    <Form.Control type='text' placeholder='Cafe'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio *</Form.Label>
                    <Form.Control type='text' placeholder='0'></Form.Control>
                </Form.Group>
                <h3 className='text-center my-4'>Categorias</h3>
                <div className='text-center'>
                    <Form.Check type='radio' label='Bebida caliente' name='categoria' inline></Form.Check>
                    <Form.Check type='radio' label='Bebida fria' name='categoria' inline></Form.Check>
                    <Form.Check type='radio' label='Dulce' name='categoria' inline></Form.Check>
                    <Form.Check type='radio' label='Salado' name='categoria' inline></Form.Check>
                </div>
            </Form>
        </Container>
    );
};

export default AgregarProducto;