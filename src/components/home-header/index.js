import React from 'react';
// import { connect } from 'react-redux';
import CYComponent from '../base/index';
import './style.less';

class HomeHeader extends CYComponent {
  constructor(props) {
    super(props);
    this.autoBind('changeMode');
  }
  changeMode() {
    const { night_style } = this.props;
    if (night_style) {
      window.document.getElementById('app').className = '';
    } else {
      window.document.getElementById('app').className = 'night-style';
    }
  }

  render() {
    const { title, iconDisplay } = this.props;
    const className = this.classname('home-header');
    return (
      <div className={className}>
        <div className="home-header-left">
          <i className="iconfont">&#xe890;</i>
          <span>{title}</span>
        </div>
        {(() => {
          if (iconDisplay) {
            return (
              <div className="home-header-right">
                <i className="iconfont icon">&#xe71f;</i>
                <i className="iconfont" onClick={this.changeMode}>&#xe619;</i>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default HomeHeader;
