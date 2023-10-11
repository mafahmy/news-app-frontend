import React from 'react';
import styles from './styles.module.css';
import ProviderInfo from './components/providerInfo/ProviderInfo';
import ViewInfo from './components/viewInfo/ViewInfo';

const ViewTitle = ({ oneNewsInfo }: { oneNewsInfo: OneNews }) => {
  return (
    <section className=''>
      <ProviderInfo oneNewsInfo={oneNewsInfo} />
      <ViewInfo oneNewsInfo={oneNewsInfo} />
    </section>
  );
};

export default ViewTitle;
