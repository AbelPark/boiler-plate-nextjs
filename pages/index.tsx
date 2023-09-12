import { NextPageWithLayout } from '@/types/layout';

const Page: NextPageWithLayout = () => {
  return <div>index</div>;
};

Page.getLayout = function getLayout(page) {
  return (
    <>
      <div>헤더</div>
      {page}
    </>
  );
};

export default Page;
