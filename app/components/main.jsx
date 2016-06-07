import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Main extends React.Component {
  render() {
    return (
    	<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
	        <div>
	          <header className="container-fluid header">
				<div className="row">
					<nav className="col-md-2">
						<h5>Plug</h5>
					</nav>
					<nav className="col-md-2">
						<h5>IT Support</h5>
					</nav>
					<nav className="col-md-2">
						<h5>MySafeDeposit</h5>
					</nav>
					<nav className="col-md-2">
						<h5>Mechanico</h5>
					</nav>
					<nav className="col-md-2">
						<h5>Support</h5>
					</nav>
					<nav className="col-md-2">
						<h5 className="glyphicon glyphicon-search">Search</h5>
					</nav>
				</div>
			</header>

			<div className="container-fluid">	
				<div className="row">
					<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

					  <div className="carousel-inner" role="listbox">
					    <div className="item active">
					      <img src="one.jpg" alt="..."></img>
					    </div>
					    <div className="item">
					      <img src="two.jpg" alt="..."></img>
					    </div>
					    <div className="item">
					      <img src="two.jpg" alt="..."></img>
					    </div>
					  </div>

					  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
				</div>
			</div>
			
			<div className="container-fluid">
				<div className="row">
					<div className="main">
						<div className="col-md-4 col">
							<h3>IT Support</h3>
						</div>
						<div className="col-md-4 col center">
							<h3>MySafeDeposit</h3>
						</div>
						<div className="col-md-4 col">
							<h3>Mechanico</h3>
						</div>
					</div>
				</div>
			</div>
			<footer className="main">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4">
							<h5>Product Line</h5>
							<h6>IT Support</h6>
							<h6>MySafeDeposit</h6>
							<h6>Mechanico</h6>
						</div>
						<div className="col-md-4">
							<h5>Our People</h5>
							<h6>Partners</h6>
							<h6>Clients</h6>
						</div>
						<div className="col-md-4">
							<h5>Who We Are</h5>
							<h6>Join Us</h6>
							<h6>Investors</h6>
							<h6>Events</h6>
							<h6>Legal</h6>
							<h6>Contact Us</h6>
						</div>
					</div>
				</div>
			</footer>

	      </div>
	    </ReactCSSTransitionGroup>
	    )
  }
}


