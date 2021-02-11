/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CommonServerSideParams } from '@/app/types/CommonServerSideParams';
import Btn from '@/common/components/dataDisplay/Btn';
import { SSGPageProps } from '@/layouts/core/types/SSGPageProps';
import {
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import DocsHomePage, {
  getStaticPaths as getStaticPathsHomePage,
  getStaticProps as getStaticPropsHomePage,
} from './demo/';

/*
  XXX This page is an "alias", it basically imports the whole /demo/index page and export it back
   It's a trick that is similar to a "url rewrite", and allows 2 different urls to serve the exact same content, without code duplication
   We use it so that you can build your own /index page while keeping the docs available for later use
   Check out /pageTemplateSSG for getting started with your own index page and override this one
 */
export default function Home() {

  return (
    <>
      <h1>Bienvenue sur SIMULACRE WEB APP CREATION</h1>
      
      <h3>Une production de Hugues Gouttebroze, Concepteur Développeur d'Applications Web</h3>
      <Card>présentation
        <CardBody>expériences pro.</CardBody>
        <CardBody>parcours</CardBody>
        <CardBody>compétences techniques</CardBody>
        <CardBody>compétences humaines</CardBody>
        <CardBody>mes valeurs</CardBody>
        <CardBody>environnement de travail</CardBody>
        <CardBody>Passions & loisirs</CardBody>
        <CardBody>le DevOps & l'Opensource</CardBody>
      </Card>

      <Card>exemple repo</Card>
      <Card>mon chatbot</Card>
      <Card>formulaire de contact</Card>


      <Btn>click me</Btn>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<CommonServerSideParams> = getStaticPathsHomePage;
export const getStaticProps: GetStaticProps<SSGPageProps, CommonServerSideParams> = getStaticPropsHomePage;


