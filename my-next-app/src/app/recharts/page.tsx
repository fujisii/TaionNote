"use client";

import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled
const DynamicSimpleLineChart = dynamic(() => import('../components/SimpleLineChart'), {
  ssr: false,
});

const ChartPage: React.FC = () => {
  return <DynamicSimpleLineChart />;
};

export default ChartPage;