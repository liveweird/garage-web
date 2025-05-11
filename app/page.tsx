'use client';

import { useState } from 'react';

import styles from "./page.module.css";
import TopMenu from "./components/TopMenu";
import LeftMenu from './components/LeftMenu';

type HomePageState = {
  selectedCategoryId: string;
  selectedItemId: string;
};

export default function Home() {
  const [state, setState] = useState<HomePageState>({
    selectedCategoryId: '',
    selectedItemId: '',
  });

  function handleCategorySelect(newCategoryId: string) {
    setState({
      ...state,
      selectedCategoryId: newCategoryId,
      selectedItemId: '',
    });
  }

  function handleItemSelect(newItemId: string) {
    setState({
      ...state,
      selectedItemId: newItemId,
    });
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="container-fluid">
          <div className="row">
            <TopMenu 
              selectedCategoryId={state.selectedCategoryId}
              onCategorySelect={handleCategorySelect}
            />
          </div>
          <div className="row">
            <div className="col-md-3 bg-light">
              <LeftMenu
                selectedCategoryId={state.selectedCategoryId}
                selectedItemId={state.selectedItemId}
                onItemSelect={handleItemSelect}
              />
            </div>
            <div className="col-md-9">
              {
                state.selectedCategoryId === '' ?
                <div className="text-left">Select a category</div> :
                state.selectedItemId === '' ?
                <div className="text-left">Select an item</div> :
                <div>{state.selectedItemId}</div>
              }
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
