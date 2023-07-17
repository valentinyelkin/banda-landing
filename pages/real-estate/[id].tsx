import { GetServerSideProps, NextPage } from 'next';
import StoreLayout from '../../src/core/layouts/StoreLayout';
import Head from 'next/head';
import useIsMobile from '../../src/core/utils/useIsMobile';
import ContactsBlock from '../../src/core/shared/ContactsBlock/ContactsBlock';
import RealEstateItem from '../../src/core/features/RealEstate/Containers/RealEstateItem/RealEstateItem';
import { RealEstateApiResponseBody } from '../../src/core/shared/interfaces/realEstateData';
import request from '../../src/core/api/request';
import api from '../../src/core/shared/constants';

const RealEstate: NextPage<RealEstateApiResponseBody> = ({ realEstate }) => {
  const isMobile = useIsMobile();

  return (
    <StoreLayout>
      <Head>
        <title>{realEstate?.head}</title>
        {realEstate.tags && (
          <meta
            name="keywords"
            content={realEstate?.tags.map(({ name }) => name).join(', ')}
          />
        )}
        {realEstate.body && (
          <meta name="description" content={realEstate?.body} />
        )}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={realEstate.head} />
        <meta property="og:image" content={realEstate.image?.fileName} />
        <meta property="og:description" content={realEstate.body} />
      </Head>
      <RealEstateItem realEstate={realEstate} />
      {isMobile && <ContactsBlock />}
    </StoreLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await request.get(
      `${api.schema}${api.backendHost}${api.helpers.realEstateContent}${context.params?.id}`,
    );
    const realEstate = res.data;

    return { props: { realEstate } };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default RealEstate;
