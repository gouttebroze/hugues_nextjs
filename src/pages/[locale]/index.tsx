import { CommonServerSideParams } from '@/app/types/CommonServerSideParams';
import Btn from '@/common/components/dataDisplay/Btn';
import LinkButton from '@/common/components/dataDisplay/LinkButton';
import { OnlyBrowserPageProps } from '@/layouts/core/types/OnlyBrowserPageProps';
import { SSGPageProps } from '@/layouts/core/types/SSGPageProps';
import DefaultLayout from '@/layouts/default/components/DefaultLayout';
import {
  getDefaultStaticPaths,
  getDefaultStaticProps,
} from '@/layouts/default/defaultSSG';
import { AMPLITUDE_PAGES } from '@/modules/core/amplitude/amplitude';
import useCustomer from '@/modules/core/data/hooks/useCustomer';
import { Customer } from '@/modules/core/data/types/Customer';
import { createLogger } from '@unly/utils-simple-logger';
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import { Card, CardBody } from 'reactstrap';

const fileLabel = 'pages/[locale]/pageTemplateSSG';
// const logger = createLogger({ // eslint-disable-line no-unused-vars,@typescript-eslint/no-unused-vars
//   label: fileLabel,
// });

/**
 * Only executed on the server side at build time
 * Necessary when a page has dynamic routes and uses "getStaticProps"
 */
export const getStaticPaths: GetStaticPaths<CommonServerSideParams> = getDefaultStaticPaths;

/**
 * Only executed on the server side at build time.
 *
 * @return Props (as "SSGPageProps") that will be passed to the Page component, as props
 *
 * @see https://github.com/vercel/next.js/discussions/10949#discussioncomment-6884
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getStaticProps: GetStaticProps<SSGPageProps, CommonServerSideParams> = getDefaultStaticProps;

/**
 * SSG pages are first rendered by the server (during static bundling)
 * Then, they're rendered by the client, and gain additional props (defined in OnlyBrowserPageProps)
 * Because this last case is the most common (server bundle only happens during development stage), we consider it a default
 * To represent this behaviour, we use the native Partial TS keyword to make all OnlyBrowserPageProps optional
 *
 * Beware props in OnlyBrowserPageProps are not available on the server
 */
type Props = {} & SSGPageProps<Partial<OnlyBrowserPageProps>>;

const PageTemplateSSG: NextPage<Props> = (props): JSX.Element => {
  //const customer: Customer = useCustomer();


  

  return (
    <>
      <DefaultLayout title="Welcome in Hugues Simulacre Creation World!">

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
  
        <LinkButton>test</LinkButton>
  
  
        <Btn>click me</Btn>
      </DefaultLayout>
    </>
  );
 
  
 
  
};

export default (PageTemplateSSG);
