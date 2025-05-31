'use client';

import { useState } from 'react';

import styles from "./page.module.css";
import TopMenu from "./components/TopMenu";
import LeftMenu from './components/LeftMenu';
import SingleItem from './components/SingleItem';

import { Item } from './services/GetItems';

type HomePageState = {
  selectedCategoryId: string;
  selectedItem: Item | null;
};

export default function Home() {
  const [state, setState] = useState<HomePageState>({
    selectedCategoryId: '',
    selectedItem: null,
  });

  function handleCategorySelect(newCategoryId: string) {
    setState({
      ...state,
      selectedCategoryId: newCategoryId,
      selectedItem: null,
    });
  }

  function handleItemSelect(newItem: Item) {
    setState({
      ...state,
      selectedItem: newItem,
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
                selectedItem={state.selectedItem}
                onItemSelect={handleItemSelect}
              />
            </div>
            <div className="col-md-9">
              {
                state.selectedItem !== null ?
                <SingleItem item={state.selectedItem} /> :
                state.selectedCategoryId !== '' ?
                <div className="text-left">Select an item</div> :
                <div className="text-left">Select a category</div>
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
