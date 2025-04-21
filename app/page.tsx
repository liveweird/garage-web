'use client';

import { useState } from 'react';

import styles from "./page.module.css";
import TopMenu from "./components/TopMenu";
import LeftMenu from './components/LeftMenu';

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  function handleCategorySelect(newCategoryId: string) {
    setSelectedCategoryId(newCategoryId);
    console.log('Category changed to:', newCategoryId);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <TopMenu 
              selectedCategoryId={selectedCategoryId} 
              onCategorySelect={handleCategorySelect}
            />
          </div>
          <div className="row">
            <div className="col-md-3 bg-light">
              <LeftMenu />
            </div>
            <div className="col-md-9">
              Content goes here
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
