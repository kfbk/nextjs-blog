// Linkコンポーネントインポートする
import Link from 'next/link';
import Head from 'next/head';
// import Script from 'next/script'; // Scriptコンポーネントをインポート
import Layout from '../../components/layout'; // Layoutコンポーネントをインポート

// ファイル呼び出し時のエントリーポイント
export default function FirstPost() {
  return (
    // レイアウトコンポーネントに変更
    <Layout>
      {/* タイトルを追加 */}
      <Head>
        <title>First Post</title>
      </Head>
      {/* facebookのスクリプト読み込み */}
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h2>
        {/* リンク先をhrefで指定する */}
        <Link href="/">
          {/* 表示したい文字を<a>タグで囲う */}
          Back to home
        </Link>
      </h2>
    </Layout>
  );
}