import { NextPage } from 'next';
import Link from 'next/link';

import Score from '@/components/respository/Score';

import { recordGoGithub } from '@/services/repository';
import { format } from '@/utils/day';

import CustomLink from '../links/CustomLink';

import { RepositoryProps } from '@/types/reppsitory';

const Info: NextPage<RepositoryProps> = ({ repo }) => {
  const onClickLink = (rid: string) => {
    // 调用接口记录链接点击信息
    recordGoGithub(rid);
  };

  return (
    <div className='flex-cloume flex '>
      <div className='max-h-full w-9/12 max-w-full'>
        <div className='relative h-full p-2'>
          <div className='w-full text-lg line-clamp-3 dark:text-gray-300 lg:text-2xl lg:line-clamp-2'>
            <CustomLink
              href={repo.url}
              className='text-blue-500 hover:border-b-2 hover:border-blue-500 dark:text-blue-500'
              onClick={() => onClickLink(repo.rid)}
            >
              {repo.full_name}
            </CustomLink>
            ：{repo.title}
          </div>
          <div className='mt-1 mr-1 flex flex-wrap text-gray-500 dark:text-gray-400 lg:mr-2'>
            <div className='mt-1 hidden text-sm lg:mr-2 lg:block lg:text-base'>
              作者 {repo.author}
              <span className='pl-1 pr-1'>·</span>
              创建于 {format(repo.repo_created_at)}
            </div>
            {repo.volume_name ? (
              <Link href={`/periodical/volume/${Number(repo.volume_name)}`}>
                <a>
                  <div className='mt-1 mr-1 flex h-6 cursor-pointer items-center rounded border border-current px-2.5 text-xs font-medium hover:text-blue-500 dark:hover:text-gray-500 lg:mr-2'>
                    第 {repo.volume_name} 期
                  </div>
                </a>
              </Link>
            ) : (
              <></>
            )}

            {repo.tags.map((item) => (
              <Link href={`/tags/${item.tid}/`} key={item.tid}>
                <a>
                  <div className='mr-1 mt-1 flex h-6 cursor-pointer items-center rounded border border-current px-2.5 text-xs font-medium hover:text-blue-500 dark:hover:text-gray-500 lg:mr-2'>
                    {item.name}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Score repo={repo}></Score>
    </div>
  );
};

export default Info;
