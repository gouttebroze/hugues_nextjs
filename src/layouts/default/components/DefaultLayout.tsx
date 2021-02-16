import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string,
}

// const {
//   color,
//   backgroundColor,
//   borderColor,
//   hoverColor,
//   hoverBackgroundColor,
//   hoverBorderColor,
//   hoverBoxShadowColor,
// } = resolveThemedComponentColors(customerTheme, mode, isTransparent);

const DefaultLayout: React.FunctionComponent<Props> = ({ children, title }) => (
  <div className='root'>

    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <header>
      <h1>Simulacre</h1>
      <Link href='/'>
        <a href="/accueil">Accueil</a>
      </Link> | {' '}
      <Link href='/fr/register'>
        <a href="/fr/register">Contact</a>
      </Link> | {' '}
      <Link href='/chatbot'>
        <a href="/chatbot">Chatbot</a>
      </Link> | {' '}
      <Link href='/fr/about'>
        <a href="/fr/about">Mes Repos</a>
      </Link> 
      
      <a href="/fr/contact">Me Contacter</a>
      
         
    </header> 

    <h1>{title}</h1>
    {children}

    {/* add this content footer into footer component */}
    <footer>
      <hr />
      <span>Developement and Creation by Hugues Simulacre Gouttebroze & copy: {new Date().getFullYear()}
        <br/>
      Special thanks to 
        {/* to do: !!! ADD LINKS !!! */}
        <ul>
          <li>Unly & Next Right Now</li>
          <li>Lydra & "Les Compagnons du DevOps"</li>
          <li>Human Booster</li>
          <li>Design Tech Académie & Télécom Saint-Etienne</li>
        </ul>
      
      </span>
    </footer>
    <style jsx>{`
    .root {
      display: flex;
      jusify-content:center;
      align-items: center;
      flex-direction: column;
    }
    header {
      width:100%;
      display: flex;
      justify-content: space-around;
      padding: 1em;
      font-size: 1.2rem;
      background: indigo;
    }
    header a {
      color: darkgrey;
      text-decoration: none;
    }
    header a:hover {
      font-weight: bold;
      color: lightgrey;
    }
    footer {
      padding: 1em;
    }
    `}</style>

    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
  `}</style>

  </div>
);

export default DefaultLayout;