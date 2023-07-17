import { FC, ReactNode } from 'react';
import Header from '../shared/Header/Header';
import LeadMagnet from '../shared/LeadMagnet/LeadMagnet';
import { useRouter } from 'next/router';
import { constantsRoutes } from '../shared/routes';

interface Props {
  children: ReactNode;
}

const StoreLayout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const openForm = new Set([
    constantsRoutes.services,
    constantsRoutes.projects,
    constantsRoutes.blog,
    constantsRoutes.blogId,
  ]);
  const route = router.pathname;

  return (
    <>
      <Header />
      {children}
      {openForm.has(route) && <LeadMagnet />}
    </>
  );
};

export default StoreLayout;
