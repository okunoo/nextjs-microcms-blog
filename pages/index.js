import Link from "next/link";
import { client } from '../libs/client';
import styles from '../styles/Home.module.scss'
//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      <h1>凡庸すぎる日常ブログ</h1>
      <img src="images/rani.png"></img>
      <h2>これといって何の面白みもない私の日常を綴ったブログサイト</h2>
      <h3>↓以下のテキストをクリックするとブログを見ることができます。↓</h3>
    {blog.map((blog) => (
      <li key={blog.id}>
        <Link href={`blog/${blog.id}`}>
          <a href="" class = "text">{blog.title}</a>
        </Link>
      </li>
    ))}
  </div>
  );
}
