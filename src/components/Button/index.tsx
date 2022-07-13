import React from 'react';

import { Button } from 'antd';
import './index.less'

interface IYButton {
  children: React.ReactNode
}

const YButton = ({children}: IYButton) => {
  return <div>
    <Button type='primary' className='abs'>{children}</Button>
  </div>
};

export default YButton;