import React from 'react';
import TitleList from "./TitleList";

// component rendered on visit to '/'
function Home() {
  return (
    <main>
      <p>
        Welcome to <b>Microblog</b>, this is where we blog.
      </p>
      <TitleList />
    </main>
  );
}

export default Home;