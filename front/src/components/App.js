import React, { Component } from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import '../styles/App.css';
import createBrowserHistory from "history/lib/createBrowserHistory";
import Main from "./pages/Main";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Header from "./Header";
import {StickyContainer} from "react-sticky";
import Footer from "./Footer";

export default class Root extends Component {
  render() {
      return (
          <Router history={createBrowserHistory()}>
              <Route path='/' component={App}>
                  <IndexRoute component={Main} />
                  <Route path="events" component={Events} />
                  <Route path='events/:number' component={Event} />
              </Route>
          </Router>
      );
  }
}

const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);

class App extends Component {
    render() {
        return (
            <div className="App">
                <StickyContainer>
                    <Header {...this.props} />
                    <main className="flex-col">
                        {
                            this.props.children
                        }
                    </main>
                    {
                        !mobile && <Footer {...this.props} />
                    }
                </StickyContainer>
            </div>
        );
    }
}
