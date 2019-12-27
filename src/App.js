import React, { Fragment } from "react";
import axios from "axios";
import ExamplePage from "./component/content";
import "./App.css";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            posts: []
        };
    }

    getAllPages = async () => {
        let res = await axios.get(
            'http://localhost/gutenberg-demo/wp-json/sections/v1/todo-list'
        );
        let { data } = await res;

        this.setState({ pages: data });
    };

    getAllPosts = async () => {
      let res = await axios.get(
        'http://localhost/gutenberg-demo/wp-json/sections/v1/todo-list'
      );
        let { data } = await res;
        this.setState({ posts: data });
    };

    componentDidMount = async () => {
      await this.getAllPages();
      await this.getAllPosts();
    };

    render() {
        const { pages,posts } = this.state;

        return (
            <Router>
              <Fragment>
                    {/* Links */}
                    <div class="container">
                        {pages.map((page, index) => {
                            return (
                              <>
                                <h2 class={"post-title"}>{page.post_title}</h2>
                                <div class={"post-content"}>{page.post_content}</div>
                              </>
                            );
                        })}
                    </div>
              </Fragment>
            </Router>
        );
    }
}