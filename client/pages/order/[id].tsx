import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Order from '../../components/Order';
import SEO from '../../components/SEO';
import { seoConfig } from '../../utils';

const OrderPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <SEO {...seoConfig} />
      <main className="wrapper py-5">
        <Order pageId={id} />
      </main>
    </>
  );
};
export default OrderPage;
