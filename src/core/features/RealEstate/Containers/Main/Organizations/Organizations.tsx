import { FC } from 'react';
import OrganizationItem from './OrganizationItem/OrganizationItem';
import { organizations } from '../../../../../lists/realEstate';
import stylesMain from '../main.module.scss';

const Organizations: FC = () => {
  return (
    <ul className={stylesMain.list}>
      {organizations.map(({ organization, id }) => (
        <OrganizationItem key={id} organization={organization} />
      ))}
    </ul>
  );
};

export default Organizations;
