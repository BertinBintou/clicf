import './App.css';
import React from "react";
import { Routes, Route, useLocation,Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import BouleContainer from './BouleContainer';
import Boulecontainerman from './Boulecontainerman';
import Home from './Home';
import Login from './Login';
import Error from './Error';

function Conditionutilisation() {
  // Get the current location
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="App conditionutilisation">
        <h3>Conditions d'utilisation</h3>
        <div style={{ textAlign: 'justify' }}>
        1. Acceptation des conditions : En accédant et en utilisant ce site, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.
            <br/>
            <br/>
        2. Objet du site :Découvrir des artistes de façon aléatoire. 
            <br/>
            <br/>
        3. Utilisation du siteVous vous engagez à utiliser ce site uniquement à des fins licites et conformément aux présentes conditions. Il est interdit de :

            <br/>
            
            <ul>
                <li>Tenter d'accéder de manière non autorisée au site, à ses systèmes ou à ses bases de données.</li>
                <li>Copier, reproduire ou exploiter le contenu du site sans autorisation expresse.</li>
            </ul>
            
            <br/>
            4. Une partie de site (Adulte )est strictement réservé aux majeurs, il contient de la nudité du contenu sexuellement explicite interdit à un public mineur. 
            en accédant à ce site vou sertifié etre majeur. 
            <ul>
                    <li>Avoir minimum 18 ans, dans tous les pays et juridictions d'utilisation.</li>
                    <li>Être majeur dans le pays, l'État ou la juridiction d'utilisation de l'application, même si la majorité est supérieure à 18 ans.</li>
                    <li>Les images générées par l'IA ne sont pas libres d'utilisation. Toute utilisation non autorisée est interdite.</li>
                    <li>Respecter toutes les lois locales, nationales et internationales applicables lors de l'utilisation de l'application.</li>
                    <li>Ne pas utiliser l'application pour des activités illégales, nuisibles ou malveillantes.</li>
                    <li>L'utilisateur accepte que les données collectées dans le cadre de l'utilisation de l'application puissent être utilisées conformément à la politique de confidentialité.</li>
                    <li>Tout manquement à ces conditions peut entraîner une résiliation immédiate de l'accès à l'application.</li>
            </ul>
            5. Limitation de responsabilité : Ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site, incluant mais sans s'y limiter, les pertes de données ou interruptions d'activité.
            <br/>
            <br/>
            6. Liens vers des tiers Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif uniquement. Nous n'avons aucun contrôle sur le contenu de ces sites et déclinons toute responsabilité concernant leur contenu ou leurs pratiques.
            <br/>
            <br/>
            7. Liens vers des tiers et interactions avec d'autres applicationsCe site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif uniquement. Nous n'avons aucun contrôle sur le contenu de ces sites et déclinons toute responsabilité concernant leur contenu ou leurs pratiques.De plus, le site peut interagir avec d'autres applications, logiciels, plateformes ou hébergeurs pour fournir certains services. Nous ne sommes pas responsables des fonctionnalités ou des politiques de ces tiers, et vous êtes invité à consulter leurs conditions d'utilisation et politiques de confidentialité.
            <br/>
            <br/>
            8. Modification des conditions d'utilisationNous : Nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur immédiatement après leur publication sur le site. Il vous appartient de consulter régulièrement les conditions pour vous tenir informé des éventuels changements.
            <br/>
            <br/>
            9. Loi applicable et juridiction : Ces conditions sont régies par les lois Françaises.
       
        {/* <p style={{ textAlign: 'justify' }}></p>
        <p></p>
               <ul>
                    <li>Avoir minimum 18 ans, dans tous les pays et juridictions d'utilisation.</li>
                    <li>Être majeur dans le pays, l'État ou la juridiction d'utilisation de l'application, même si la majorité est supérieure à 18 ans.</li>
                    <li>Les images générées par l'IA ne sont pas libres d'utilisation. Toute utilisation non autorisée est interdite.</li>
                    <li>Respecter toutes les lois locales, nationales et internationales applicables lors de l'utilisation de l'application.</li>
                    <li>Ne pas utiliser l'application pour des activités illégales, nuisibles ou malveillantes.</li>
                    <li>L'utilisateur accepte que les données collectées dans le cadre de l'utilisation de l'application puissent être utilisées conformément à la politique de confidentialité.</li>
                    <li>Tout manquement à ces conditions peut entraîner une résiliation immédiate de l'accès à l'application.</li>
                </ul> */}

        <br/>
        </div>
        <br/>
        <br/>
    <button onClick={() => navigate(-1)} className="nav-button">
          Retour
    </button>

    </div>
  );
}

export default Conditionutilisation;
