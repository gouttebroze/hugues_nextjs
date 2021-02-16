// import { CommonServerSideParams } from '@/app/types/CommonServerSideParams';
// import { SSGPageProps } from '@/layouts/core/types/SSGPageProps';
// import { GetStaticPaths, GetStaticProps } from 'next';
// import {
//   getDefaultStaticPaths,
//   getDefaultStaticProps,
// } from '@/layouts/default/defaultSSG';
// /* eslint-disable react/display-name */
// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import React from 'react';
// import DefaultLayout from '@/layouts/default/components/DefaultLayout';
// import { Field, Formik } from 'formik';
// import { InputField } from '@/layouts/default/components/fields/InputField';
// import Btn from '@/common/components/dataDisplay/Btn';



// export default function Register() {
//   return(
//     <DefaultLayout title="Me Contacter">
//       <Formik
//         // eslint-disable-next-line @typescript-eslint/no-empty-function
//         onSubmit={(data) => {
//           // eslint-disable-next-line no-console
//           console.log(data);
//         }}
//         initialValues={{
//           email: '',
//           firstName: '',
//           lastName: '',
//           password: ''
//         }}>
//         {({ handleSubmit }) => <form onSubmit={handleSubmit}>
//           <Field 
//             name='email' 
//             placeholder='email' 
//             component={InputField}
//           />
//           <Field 
//             name='firstName' 
//             placeholder='firstName' 
//             component={InputField}
//           />
//           <Field 
//             name='lastName' 
//             placeholder='lastName' 
//             component={InputField}
//           />
//           <Field 
//             name='password'
//             placeholder='password' 
//             type='password'
//             component={InputField} 
//           />
//           <Btn type='submit'>Envoyer</Btn>
//         </form>}
//       </Formik>
//       <div>
//         <br/>
//         <p>Vous pouvez également me contacter en m'adressant un email
//             à {' '}
//         <a href='mailto:hgouttebroze@stagiaire-humanbooster.com'>hgouttebroze@stagiaire-humanbooster.com</a>,
//             je vous répondrais dans les plus bref délais.
//         <br/>
//             Merci.
//         </p>   
//       </div>;
//     </DefaultLayout>
//   );
// }

// export const getStaticPaths: GetStaticPaths<CommonServerSideParams> = getDefaultStaticPaths;
// export const getStaticProps: GetStaticProps<SSGPageProps, CommonServerSideParams> = getDefaultStaticProps;