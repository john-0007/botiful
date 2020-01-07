import React from 'react'
import { Link } from 'react-router5'
import { Provider } from 'mobx-react'
import Pages from '../pages'

import './application.sass'
import t from './application.locale'

class Application extends React.Component {
  render() {    
    return (
      <Provider {...this.props}>
        <main id='Application' styleName='content'>
          <nav className='navbar navbar-expand-lg' styleName='nav'>
            <div className='container'>
              <Link className="navbar-brand" routeName='home' styleName='brand'>{t('brand')}</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
          <Pages />
        </main>
      </Provider>
    );
  }
}

export default Application
