import React from 'react';
import closing from '../img/closing.png';
import up from '../img/up.png';
import down from '../img/down.png';
import up1 from '../img/less.png';
import down1 from '../img/more_unfold.png';
class CardLayout extends React.Component {


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
    const { children, title = "title", more = false, mode = 'dark', closingInfo, moreInfo, onTouch } = this.props

    const border = {
      border: mode == 'pure' ? '1px solid #f0f2f5' : (mode == 'light' ? '1px solid #ececec' : '1px solid #282a36'),
      marginBottom: '1em',
      paddingBottom: '1em'
    }

    const style = {
      borderBottom: mode == 'pure' ? '1px solid #f0f2f5' : (mode == 'light' ? '1px solid #ececec' : '1px solid #282a36'),
      height: '3em',
      fontSize: '1.3em',
      backgroundColor: mode == 'pure' ? '' : (mode == 'light' ? '#ececec' : '#282a36'),
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1em',
      color: mode == 'pure' ? '#000f20' : (mode == 'light' ? '#000f20' : 'white'),
      justifyContent: 'space-between'
    }
    const infoStyle = {
      padding: '0.5em 2em 0.5em 2em',
    }

    const closeInfoStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '0.5em'
    }

    const titleStyle = {
      marginRight: '0.4em'
    }

    return (
      <div style={border}>
        <div style={style}>
          <span>{title}</span>
          <span style={titleStyle}>
            {
              more ? <a onClick={onTouch}>{moreInfo ? moreInfo : "more"}</a> :
                (this.state.close ? <span onClick={(status) => this.onChange(status = false)}><img src={mode == 'dark' ? down1 : down} /></span> : <span onClick={(status) => this.onChange(status = true)}><img src={mode == 'dark' ? up1 : up} /></span>)
            }
          </span>
        </div>
        <div>
          {
            this.state.close ? <div style={closeInfoStyle}><img src={closing} /> {closingInfo ? closingInfo : "收起中"}</div> : <div style={infoStyle}>{children}</div>
          }
        </div>
      </div>
    )
  }
}

export default CardLayout;
