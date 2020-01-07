import React from 'react'
import Modal from 'react-responsive-modal'
import { Helmet } from 'react-helmet'

import Loading from 'components/loading'

import Tabular from 'components/tabular'

import './index.sass'
import t from './index.locale'

import application_feedback from './application-feedback.png'
import laptop from './laptop.svg'
import paper_plane from './paper-plane.svg'

import logo from './logo.svg'

import products from './products.json'

import consultings from './consultings'

import cover_pictures from './cover_pictures'

import favicon from './favicon.png'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contactOpen: false
    }
  }

  openContact = e => {
    e.preventDefault()

    this.setState({ contactOpen: true })
  }

  closeContact = e => {
    e.preventDefault()

    this.setState({ contactOpen: false })
  }

  render() {
    const { contactOpen } = this.state

    return (
      <React.Fragment>
        <section styleName='hero'>
          <Helmet>
            <meta charSet='utf-8' />
            <title>Artellectual - Continuously Improving Software</title>
            <link rel='canonical' href='https://www.artellectual.com' />
            <link rel='shortcut icon' type='image/png' href={favicon} />
            <meta
              name='description'
              content='Software Development Agency dedicated to Continuous Improvement of Software'
            />
          </Helmet>
          <div className='container'>
            <section styleName='content' className='row'>
              <img src={logo} alt={t('slogan')} width='384' />
              <h1 className='text-center'>
                <span>{t('slogan')['part_1']}</span>
                <span styleName='highlight'>{t('slogan')['part_2']}</span>
                <span>{t('slogan')['part_3']}</span>
                <span styleName='highlight'>{t('slogan')['part_4']}</span>
                <span>{t('slogan')['part_5']}</span>
                <br />
                <span styleName='highlight'>{t('slogan')['part_6']}</span>
                <span>{t('slogan')['part_7']}</span>
              </h1>
            </section>
            <section styleName='products'>
              <div className='card-deck'>
                {products.map((p, index) => (
                  <div
                    key={p.slug}
                    className='card shadow mb-5 animated border-0 fadeIn'
                    style={{ animationDelay: `${index / 6}s` }}
                    styleName='card'
                  >
                    <a href={p.link} target='_blank'>
                      <img
                        className='card-img-top'
                        src={cover_pictures[p.cover_picture]}
                        alt={p.name}
                      />
                    </a>
                    <div className='card-body'>
                      <h3 className='card-title'>
                        <a href={p.link} target='_blank'>
                          {p.name}
                        </a>
                      </h3>
                      <p className='card-text'>{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section
          styleName='product_consulting'
          style={{ backgroundImage: `url(${application_feedback})` }}
        >
          <div className='container'>
            <h2 id='product-consulting' className='text-center'>
              {t('product_consulting')}
            </h2>
            <p className='text-center lead' styleName='lead'>
              {t('product_consult_text')}
            </p>
            {consultings.product.map((c, index) => (
              <div
                key={`consulting_group_${index}`}
                className='card-deck mb-5 animated fadeIn'
                style={{ animationDelay: `${index / 2}s` }}
              >
                {c.map(point => (
                  <div
                    key={`consulting_point_${point.id}`}
                    className='card mb-5 border-0'
                    styleName='transparent card'
                  >
                    <div className='card-body'>
                      <div>
                        <div styleName='icon' className='mb-2'>
                          <i className={point.icon} />
                        </div>
                      </div>
                      <h4 className='card-title'>{point.heading}</h4>
                      <p className='card-text'>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section
          styleName='technical_consulting'
          style={{ backgroundImage: `url(${laptop})` }}
        >
          <div className='container'>
            <h2 id='technical-consulting' className='text-center'>
              {t('technical_consulting')}
            </h2>
            <p className='text-center lead' styleName='lead'>
              {t('technical_consult_text')}
            </p>
            <Tabular groups={consultings.technical} />
          </div>
        </section>

        <section
          className='jumbotron jumbotron-fluid text-center'
          styleName='continuous_improvement'
          style={{ backgroundImage: `url(${paper_plane})` }}
        >
          <div className='container'>
            <h2>{t('dedicated_to_continuous_improvement')}</h2>
            <p className='lead'>
              <i className='fas fa-infinity fa-2x' />
            </p>
            <p className='lead'>{t('continuous_improvement_description')}</p>

            <a
              href='mailto:zack@artellectual.com'
              className='btn btn-success btn-lg'
            >
              {t('get_in_touch')}
            </a>
            <Modal open={contactOpen} onClose={this.closeContact} center>
              <div>
                <h1>Contact</h1>
              </div>
            </Modal>
          </div>
        </section>

        <footer styleName='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-4'>
                <img src={logo} width={64} />
                <address className='mt-3'>
                  <strong>{t('company_name')}</strong>
                  <br />
                  {t('address_1')}
                  <br />
                  {t('address_2')}
                  <br />
                  <span>
                    <i className='fas fa-mobile' />
                  </span>{' '}
                  {t('phone')}
                </address>
              </div>
              <div className='col-4'>
                <h5>{t('products')}</h5>
                <ul>
                  {products.map(p => (
                    <li key={`footer_products_${p.slug}`}>
                      <a href={p.link} target='_blank'>
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='col-4'>
                <h5>{t('consulting')}</h5>
                <ul>
                  <li>
                    <a href='#product-consulting'>{t('product_consulting')}</a>
                  </li>
                  <li>
                    <a href='#technical-consulting'>
                      {t('technical_consulting')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Home
