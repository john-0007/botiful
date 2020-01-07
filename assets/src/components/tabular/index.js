import React from 'react'
import c from 'classnames'
import './index.sass'

class Tabular extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = { active: null }
  }

  componentDidMount() {
    const { groups } = this.props
    this.setState({ active: groups[0].key })
  }

  changeTab = (e, key) => {
    e.preventDefault()

    this.setState({ active: key })
  }

  renderContent = (group) => {
    const { active } = this.state
    const isActive = (group.key === active)

    return (
      <div key={`content_${group.key}`} className={c('tab-pane fade', { show: isActive, active: isActive })}>
        <div className='card border-0 shadow-lg' styleName='transparent'>
          <div className='card-body'>
            <h5 className='card-title'>{group.name}</h5>
            <p className='card-text'>{group.description}</p>
            {group.technologies.map(t => 
              <div key={t.name} className="card text-white bg-dark mb-3">
                <div className='card-body'>
                  <h5 className='card-title'>{t.name}</h5>
                  <p className='card-text'>{t.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }


  render() {
    const { groups } = this.props
    const { active } = this.state

    return (
      <div className='row'>
        <div className='col-xs-12 col-md-4 mb-3'>
          <div className='list-group'>
            {groups.map(g => 
              <a onClick={(e) => { this.changeTab(e, g.key) }} 
                 key={g.key} 
                 className='list-group-item list-group-item-action'
                 styleName={c({active: (g.key == active)})}><i className={g.icon}></i> {g.name}</a>
            )}
          </div>
        </div>

        <div className='col-xs-12 col-md-8'>
          <div className='tab-content'>
            {groups.map(this.renderContent)}
          </div>
        </div>
      </div>
    )
  }
}

export default Tabular
