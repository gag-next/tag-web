import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CheckableTag extends React.Component {
  handleClick = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  }
  render() {
    const { prefixCls = 'ant-tag', className, checked, ...restProps } = this.props;
    const cls = classNames(prefixCls, {
      [`${prefixCls}-checkable`]: true,
      [`${prefixCls}-checkable-checked`]: checked,
    }, className);

    delete restProps.onChange; // TypeScript cannot check delete now.
    return <div {...restProps} className={cls} onClick={this.handleClick} />;
  }
}
CheckableTag.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};
CheckableTag.displayName = "CheckableTag";
module.exports=CheckableTag;
