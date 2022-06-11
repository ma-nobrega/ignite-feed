import { Header } from "./components/Header";
import { Post } from "./Post"

import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Matheus Nobrega"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste fuga facere omnis corrupti atque ex impedit, sunt hic rerum placeat, eaque nam repudiandae sed culpa iure, id eius aspernatur."
      />
      <Post
        author="Fulano da Silva"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste fuga facere omnis corrupti atque ex impedit, sunt hic rerum placeat, eaque nam repudiandae sed culpa iure, id eius aspernatur."
      />
    </>
  )
}