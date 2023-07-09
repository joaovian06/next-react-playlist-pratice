import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link>
        <a href="sobre">Acessar página Sobre</a>
      </Link>
    </div>
  );
}

export default Home;
