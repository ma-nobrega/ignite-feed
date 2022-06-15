import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post
            author="Matheus Nobrega"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste fuga facere omnis corrupti atque ex impedit, sunt hic rerum placeat, eaque nam repudiandae sed culpa iure, id eius aspernatur."
          />
          <Post
            author="Fulano da Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste fuga facere omnis corrupti atque ex impedit, sunt hic rerum placeat, eaque nam repudiandae sed culpa iure, id eius aspernatur."
          />
        </main>
      </div>
    </div>
  );
}
