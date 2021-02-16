import { CommonServerSideParams } from '@/app/types/CommonServerSideParams';
import { SSGPageProps } from '@/layouts/core/types/SSGPageProps';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getDefaultStaticPaths,
  getDefaultStaticProps,
} from '@/layouts/default/defaultSSG';
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import DefaultLayout from '@/layouts/default/components/DefaultLayout';

import { Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';



export default function About() {
  return(
    <DefaultLayout title="Comment j'en suis arrivé là?">
      <Card></Card>
      <CardImgOverlay></CardImgOverlay>  
      <CardImg></CardImg> 
      <CardTitle></CardTitle> 
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </DefaultLayout>
  );
}

export const getStaticPaths: GetStaticPaths<CommonServerSideParams> = getDefaultStaticPaths;
export const getStaticProps: GetStaticProps<SSGPageProps, CommonServerSideParams> = getDefaultStaticProps;