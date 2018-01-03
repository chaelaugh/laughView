import React from 'react';

export default class SimpleBtn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      close: false
    }
  }

  onChange(status) {
    this.setState({
      close: status
    })
  }


  render() {

    const { children, title = "title", titleColor = '#606f84', more = '', add = '', mode = 'dark' } = this.props
    const style = {
      border: mode == 'dark' ? '1px solid #606f84' : '0px solid #606f84',
      marginBottom: '1em',
      minWidth: 800,
      paddingBottom: '1em'
    }
    const borderStyle = {
      border: '1px solid #606f84',
      borderStyle: 'none none solid none',
      height: '3em',
      fontSize: '1.3em',
      backgroundColor: titleColor,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1em',
      color: '#ffffff',
      justifyContent: 'space-between'
    }
    const infoStyle = {
      padding: ' 0.5em 2em 0.5em 2em',
      marginTop: '1em'
    }

    const pureStyle = {
      borderBottom: '3px solid #6a6f84',
      height: '3em',
      fontSize: '1.4em',
      display: 'flex',
      color: '#6a6f84',
      alignItems: 'center',
      margin: '0 1em 0 1em'
    }

    return (
      <div style={style}>
        <div style={mode == 'dark' ? borderStyle : pureStyle}>
          <span>{title}<span>{add ? <Button style={{ marginLeft: '1em', fontSize: '0.9em', backgroundColor: '#8392a8', color: '#ffffff', border: 'none', height: '1.5em' }} onClick={add.onTouch}>{add.title}</Button> : <span></span>}</span></span>
          <span style={{ marginRight: '0.4em' }}>
            {
              more ?
                // <span></span>
                <a style={{ marginRight: '1em', fontSize: '0.9em', color: '#ffffff' }} onClick={more.onTouch}>{more.title}</a>
                :
                <span></span>
            }
            {
              this.state.close ? <Icon type="down" onClick={(status) => this.onChange(status = false)} /> : <Icon type="up" onClick={(status) => this.onChange(status = true)} />
            }
          </span>

        </div>
        <div>
          {
            this.state.close ? <div style={{ textAlign: 'center', margin: '1em 0' }}><Icon type="frown-o" /><FormattedMessage id="closing" /></div> : <div style={infoStyle}>{children}</div>
          }
        </div>
      </div>
    );
  }
}
