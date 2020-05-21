import React from 'react';

export default (props:any) => {
  const { name } = props;
  const className = 'fa fa-' + name;
  return <i className={className}/>;
}