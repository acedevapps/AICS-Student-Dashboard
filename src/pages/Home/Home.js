import './Home.css'

function TopPage() {
	return <div className="top-page">
		<h1>Welcome!</h1>
	  	<p>Where are we off to today?</p>
	  </div>;
}

function CalendarPage() {
	return <div className="Calendar">

		</div>;
}

function News() {
	return <div className="News">
		<h1> News! </h1>
	</div>
}

function Home() {
	//const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="Home">
		<TopPage/>	
		<News/>
		<CalendarPage/>
	</div>
  );
  }

export default Home;

