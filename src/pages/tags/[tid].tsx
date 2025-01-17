import { GetServerSideProps, NextPage } from 'next';

import ItemBottom from '@/components/home/ItemBottom';
import Items from '@/components/home/Items';
import Navbar from '@/components/navbar/Navbar';
import Seo from '@/components/Seo';
import ToTop from '@/components/toTop/ToTop';

import { getTagPageItems } from '@/services/tag';

import { TagPageProps } from '@/types/tag';

const TagPage: NextPage<TagPageProps> = ({ items, tag_name }) => {
  return (
    <>
      <Seo title={`标签 ${tag_name}`} />
      <Seo />
      <Navbar middleText={tag_name} endText='标签'></Navbar>

      <div className='h-screen'>
        <Items repositories={items}></Items>
        <ItemBottom endText='你不经意间触碰到了底线'></ItemBottom>
        <div className='hidden md:block'>
          <ToTop />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  let ip;
  if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'] as string;
    ip = ip.split(',')[0] as string;
  } else if (req.headers['x-real-ip']) {
    ip = req.headers['x-real-ip'] as string;
  } else {
    ip = req.socket.remoteAddress as string;
  }

  const tid = query?.tid as string;
  const data = await getTagPageItems(ip, tid);
  return {
    props: { items: data.data, tag_name: data.tag_name },
  };
};

export default TagPage;
