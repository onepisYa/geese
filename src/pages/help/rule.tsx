import { NextPage } from 'next';

import MDRender from '@/components/mdRender/MDRender';
import Seo from '@/components/Seo';
import ToTop from '@/components/toTop/ToTop';

import content from '../../../data/rule.md';

import { HelpPageProps } from '@/types/help';

const RulePage: NextPage<HelpPageProps> = ({ content }) => {
  return (
    <>
      <Seo title='社区规则' />
      <div className='mt-2 bg-white p-5 '>
        <div className='mb-10 flex flex-col items-center px-2 text-4xl font-bold '>
          社区规则
        </div>
        <article className='prose max-w-none'>
          <MDRender>{content}</MDRender>
        </article>
        <div className='flex flex-col items-center text-base text-gray-400 '>
          - END -
        </div>
      </div>
      <ToTop />
      <div className='h-4'></div>
    </>
  );
};

export default RulePage;

export async function getStaticProps() {
  return {
    props: { content: content },
  };
}
