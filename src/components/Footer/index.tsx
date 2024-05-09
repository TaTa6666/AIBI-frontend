import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'TATA出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={currentYear + ' ' + defaultMessage}
      links={[
        {
          key: 'TATA智能BI系统',
          title: 'TATA智能BI系统',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com',
          blankTarget: true,
        },
        {
          key: 'TaTa6666',
          title: 'TaTa6666',
          href: 'https://github.com/TaTa6666',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
