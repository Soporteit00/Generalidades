import React, { Component } from 'react';
import './Footer.scss';

import LogoFooter from '../assets/img/cover/logo-2.png';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Footer extends Component {

  // ENVIO DE ID PARA NAVEGAR EL CURSO
  navigationCourse = e => {
    const { actualIndex } = this.props;
    e.preventDefault();
    if (e.target.id === 'btnNavRight') {
      console.log(actualIndex);

      document.getElementById('btnNavRight').classList.remove('animationBtnNav');

      this.props.clickNavigation(e.target.id);
    } else {
      this.props.clickNavigation(e.target.id);
    }

  }

  // MOSTRAR EL LOGO CUANDO NO ESTÁ EN LA PÁGINA 1
  showLogo = () => {
    const { actualIndex } = this.props;

    if (actualIndex !== 0) {
      return(
        <img
          alt='Imagen Corporativa'
          className='imageFooter'
          src={ LogoFooter }/>
      );
    } else {
      return null;
    }
  }

  // MOSTRAR EL MENU DE NAVEGACIÓN Y BLOQUEAR LOS BOTONES DEPENDIENDO DE LA PAGINA
  showNavigation = () => {
    const { actualIndex, limitNavigation, data } = this.props;

    if (actualIndex !== 0) {
      return(
        <div className = 'buttonPannel'>
          <button
            className = { 'buttonNav ' + (actualIndex === 1 || actualIndex === 4 || actualIndex === 18  || Object.values(data)[actualIndex].startUnit === true ? 'disabled': '') }
            id = 'btnNavLeft'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'arrow-left'] }
              size = '2x' />
          </button>

          <button
            className = { 'buttonNav ' + (actualIndex === (limitNavigation + 1) || Object.values(data)[actualIndex].endCourse === true ? 'disabled ': '') + (actualIndex === 1 || actualIndex === 2 || actualIndex === 3 || actualIndex === 17 || actualIndex === 20 || actualIndex === 21 || actualIndex === 23  ? 'disabled ': '') }
            id = 'btnNavRight'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'arrow-right'] }
              size = '2x' />
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  showLabel = () => {
    const { actualIndex, labelFooter } = this.props;

    if (actualIndex !== 0) {
      return(
        <h3 className = 'labelFooter fw-4' dangerouslySetInnerHTML = {{ __html: labelFooter }}></h3>
      );
    }
  }

  showPage = () => {
    const { actualIndex } = this.props;
    if (actualIndex !== 0) {
      return(
        <h1 className = 'numberPage fw-3'>{ ((actualIndex) <= 8 ? '0' + (actualIndex) : (actualIndex)) }</h1>
      );
    }
  }


  render() {
    const { actualIndex, endActivities } = this.props;
    // console.log(endActivities);

    // { this.showPage() }

    return (
      <div className = { (actualIndex === 0 || actualIndex === 30 ? 'footer-desc' : 'footer') + ' d-Flex j-S aI-C' }>

        { this.showLogo() }
        { this.showLabel() }
        { this.showNavigation() }  


        <div className = { 'restrict ' + ((endActivities[actualIndex]) === true ? 'dNone' : '') } />
      </div>
    );
  }
}

export default Footer;
