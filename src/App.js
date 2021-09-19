import './App.css';
import tutorialData from './tutorial.json'
import { useEffect, useState } from 'react';
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>

  );
}

function Header() {
  return (
    <header>
      <div class="nav">
        <h3>That is Dude </h3>
        <button class="sign-in">Sign In</button>
      </div>

      <div class="header-main">
        <h1>Exclusive React Workshop for <br />beginners !! </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde. Doloribus aliquid accusantium ullam nam?</p>
        <button class="details">Learn More</button>
      </div>
    </header>

  )
}



function Main() {
  return (
    <section className="main">
      <Left></Left>
      <Right></Right>
    </section>
  )
}

function Left() {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    setTutorials(tutorialData)
  }, [])
  // console.log(tutorials)
  return (
    <div className="left">
      <JsConfig></JsConfig>
      <div id="tutorials-container">
        {
          tutorials.map(tutorial => <Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>)
        }
      </div>
    </div>
  )
}
function Tutorial(props) {
  const { title, desc } = props;
  console.log(props);
  return (
    <div class="tutorial">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button class="details">View details </button>

    </div>
  )
}


function Right() {
  return (
    <div className="right">
      <PersonalTraining></PersonalTraining>
      <RecentVideos></RecentVideos>
    </div>
  )
}

function JsConfig() {
  return (
    <div class="js-config">
      <h4>JS Confusing </h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate porro repellendus sapiente quam esse numquam reiciendis facere tempore ea! At aliquam quisquam mollitia sit praesentium.</p>
    </div>
  )
}

function PersonalTraining() {
  return (
    <div id="personal-training">
      <h2>Personal Training for $50</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro officia iusto nulla eligendi, quas tenetur ratione. Voluptate dolorum aliquam facilis iste quo fugit consequuntur temporibus assumenda dolores, adipisci eligendi.</p>
    </div>
  )
}

function RecentVideos() {
  return (
    <div id="recent-videos">
      <h3>Recent Videos </h3>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
        <button class="btn btn-outline-secondary">More on youtube</button>
      </ul>
    </div>
  )
}
export default App;


