import dynamic from 'next/dynamic';
import React from 'react';
import ScrollPage from "./ScrollPage";

const ScrollPageLoader = dynamic(() => import("./ScrollModelAnimation"), {
    ssr: false,
    loading: () => <ScrollPage />,
});

const Scroll = () => {
  return (
    <div className='w-full'>
        <div>
            <ScrollPageLoader />
        </div>
    </div>
  )
}

export default Scroll
