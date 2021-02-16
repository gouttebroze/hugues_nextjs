import React from 'react';
import { CommonServerSideParams } from '@/app/types/CommonServerSideParams';
import { SSGPageProps } from '@/layouts/core/types/SSGPageProps';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getDefaultStaticPaths,
  getDefaultStaticProps,
} from '@/layouts/default/defaultSSG';
import DefaultLayout from '@/layouts/default/components/DefaultLayout';
import Btn from '@/common/components/dataDisplay/Btn';

import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

/**
 * pr eviter le rerendu de React sur chaque Input, ns allons utiliser le hook "react-hook-form"
 */


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Contact = (props) => {
  return (
    <DefaultLayout title='Me Contacter'>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="prenom">Prénom</Label>
              <Input type="text" name="prenom" id="examplePrenom" placeholder="Prénom" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="nom">Nom</Label>
              <Input type="text" name="nom" id="exampleNom" placeholder="Nom" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Adresse</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Adresse 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Ville</Label>
              <Input type="text" name="city" id="Ville"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">Pays</Label>
              <Input type="text" name="state" id="Pays"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Code Postal</Label>
              <Input type="text" name="zip" id="Code Postal"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Se souvenir de moi</Label>
        </FormGroup>
        <Btn>Envoyer</Btn>
      </Form>
    </DefaultLayout>
  );
};

export default Contact;


export const getStaticPaths: GetStaticPaths<CommonServerSideParams> = getDefaultStaticPaths;
export const getStaticProps: GetStaticProps<SSGPageProps, CommonServerSideParams> = getDefaultStaticProps;