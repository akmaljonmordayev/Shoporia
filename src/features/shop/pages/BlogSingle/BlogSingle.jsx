import React from 'react'
import { useParams } from 'react-router-dom'
import useGetOne from '../../../../hooks/useGetOne'
function BlogSingle () {
  const { id } = useParams()

  const { data, isError, isLoading } = useGetOne('/blogCart', id, [
    `blogCart/${id}`
  ])

  if (isLoading) return <h1>loading...</h1>
  console.log(data)
  return (
    <div className='flex items-start justify-center gap-12 mt-24 px-4'>
      <div className='max-w-[800px] font-sans text-gray-900'>
        <div className='article-card'>
          <h2 className='text-[28px] font-extrabold mb-2 max-w-[810px]'>
            {data?.titleBlog}
          </h2>

          <p className='text-sm text-gray-500 mb-4'>{data?.date}</p>
          <img
            className='w-[808px] h-[414px] rounded-md object-cover mb-5'
            src={data?.imageBlog}
            alt=''
          />

          <p className='text-base leading-6 text-gray-800'>{data?.Bigdesc}</p>

          <div className='w-[808px] border-2 border-[#B4B4B4] mt-6' />

          <div className='max-w-[900px] m-5 mx-auto'>
            <h3 className='text-lg font-semibold mb-2'>Leave a Comment</h3>

            <form className='flex flex-col comment-form'>
              <div className='flex-1'>
                <textarea
                  placeholder='Share your thoughts about this product here'
                  value=''
                  className='w-[810px] max-w-full h-[277px] p-4 rounded-md border border-gray-300 text-sm resize-y outline-none transition focus:border-blue-500 focus:shadow-md'
                ></textarea>
              </div>

              <button
                type='submit'
                className='px-4 py-2 h-11 rounded-md text-white font-semibold mt-4 self-end ml-[725px] bg-blue-600 active:translate-y-[1px]'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <aside className='w-[300px] max-w-[300px]'>
          <h3 className='pt-[90px] mb-3 text-lg font-semibold'>Categories</h3>
          <ul className='space-y-2'>
            <li className='max-w-[300px]'>Technology Trends and News</li>
            <li className='max-w-[300px]'>Gaming Insights</li>
            <li className='max-w-[300px]'>Security and Privacy</li>
            <li className='max-w-[300px]'>Tech Lifestyle and Productivity</li>
            <li className='max-w-[300px]'>Product Spotlight</li>
            <li className='max-w-[300px]'>How-to Guides and Tutorials</li>
            <li className='max-w-[300px]'>Buying Guides and Tips</li>
          </ul>
        </aside>

        <style jsx>{`
          @media (max-width: 560px) {
            textarea {
              width: 100% !important;
            }
            button {
              width: 40% !important;
              margin-left: 0 !important;
              align-self: flex-end;
            }
          }
        `}</style>
        <div className='mt-[50px]'>
          <h2 className='text-2xl font-semibold mb-[24px]'>Tags</h2>

          <div className='flex flex-wrap gap-4 max-w-[492px]'>
            <div className='w-[108px] h-[48px] flex items-center justify-center rounded-[8px] border-2 border-[#0c68f4] text-[#3b82f6] font-inter font-[530] text-[16px] leading-[100%] hover:border-[#002f6c] hover:text-[#002f6c] cursor-pointer'>
              Technology
            </div>
            <div className='w-[108px] h-[48px] flex items-center justify-center rounded-[8px] border-2 border-[#0c68f4] text-[#3b82f6] font-inter font-[530] text-[16px] leading-[100%] hover:border-[#002f6c] hover:text-[#002f6c] cursor-pointer'>
              Headset
            </div>
            <div className='w-[108px] h-[48px] flex items-center justify-center rounded-[8px] border-2 border-[#0c68f4] text-[#3b82f6] font-inter font-[530] text-[16px] leading-[100%] hover:border-[#002f6c] hover:text-[#002f6c] cursor-pointer'>
              Phone
            </div>
            <div className='w-[108px] h-[48px] flex items-center justify-center rounded-[8px] border-2 border-[#0c68f4] text-[#3b82f6] font-inter font-[530] text-[16px] leading-[100%] hover:border-[#002f6c] hover:text-[#002f6c] cursor-pointer'>
              Wireless
            </div>
            <div className='w-[108px] h-[48px] flex items-center justify-center rounded-[8px] border-2 border-[#0c68f4] text-[#3b82f6] font-inter font-[530] text-[16px] leading-[100%] hover:border-[#002f6c] hover:text-[#002f6c] cursor-pointer'>
              Apple
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSingle
