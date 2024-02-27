const MainContent = () =>{ 
    return(
      <main className="flex-row items-center bg-purple-300 px-5 py-10 text-pink-600"> 
        <div className="text-5xl font-bold underline flex">React Logo</div>
        <h1 className="flex">Fun facts about React</h1>
        <ul className="p-5">
          <li className="list-disc">It's Composable</li>
          <li className="list-disc">It's declarative</li>
          <li className="list-disc">It's highly hireable skill</li>
          <li className="list-disc">It's maintained by skilled professionals</li>
        </ul>
      </main>
    )
  }

  export default MainContent;