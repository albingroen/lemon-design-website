import Head from "next/head";

export default function Seo() {
  const description = "A React component library based on Tailwind CSS";
  const url = "https://lemondesign.dev";
  const title = "Lemon Design React";
  const image =
    "https://res.cloudinary.com/albin-groen/image/upload/v1649705086/lemon-meta_frxdzg.png";

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
