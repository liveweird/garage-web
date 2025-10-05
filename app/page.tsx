"use client";

import { useState } from "react";

import styles from "./page.module.css";
import TopMenu from "./components/TopMenu";
import LeftMenu from "./components/LeftMenu";
import SingleItem from "./components/SingleItem";

import { Item } from "./services/GetItems";

type HomePageState = {
  selectedAllCategories: boolean;
  selectedCategoryId: string;
  selectedWishlist: boolean;
  selectedItem: Item | null;
};

export default function Home() {
  const [state, setState] = useState<HomePageState>({
    selectedAllCategories: true,
    selectedCategoryId: "",
    selectedWishlist: false,
    selectedItem: null,
  });

  function handleAllCategoriesSelect() {
    setState({
      ...state,
      selectedAllCategories: true,
      selectedCategoryId: "",
      selectedWishlist: false,
      selectedItem: null,
    });
  }

  function handleCategorySelect(newCategoryId: string) {
    setState({
      ...state,
      selectedAllCategories: false,
      selectedCategoryId: newCategoryId,
      selectedWishlist: false,
      selectedItem: null,
    });
  }

  function handleWishlistSelect() {
    setState({
      ...state,
      selectedAllCategories: false,
      selectedCategoryId: "",
      selectedWishlist: true,
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
              selectedAllCategories={state.selectedAllCategories}
              selectedCategoryId={state.selectedCategoryId}
              selectedWishlist={state.selectedWishlist}
              onAllCategoriesSelect={handleAllCategoriesSelect}
              onCategorySelect={handleCategorySelect}
              onWishlistSelect={handleWishlistSelect}
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
              {state.selectedItem !== null ? (
                <SingleItem item={state.selectedItem} />
              ) : state.selectedCategoryId !== "" ? (
                <div className="text-left">Select an item</div>
              ) : (
                <div className="text-left">Select a category</div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
