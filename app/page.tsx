import Home_Body from "./(Home_Body)/Home_Body";
import Navbar from "./(components)/Navbar";
import StarsCanvas from "./(StarMode)/Background_Stars";
export default function Home() {
  return (
    <main className="w-full h-screen bg-[url('/main.svg')] bg-cover overflow-y-scroll overflow-x-hidden  ">
      <StarsCanvas />
      <Navbar />
      <Home_Body />
    </main>
  );
}
