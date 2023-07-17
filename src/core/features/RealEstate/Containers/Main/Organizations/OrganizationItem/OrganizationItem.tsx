import { FC } from 'react';
import styles from './organizationItem.module.scss';

interface OrganizationItemProps {
  organization: string;
}

const OrganizationItem: FC<OrganizationItemProps> = ({ organization }) => (
  <li className={styles.item}>{organization}</li>
);

export default OrganizationItem;
