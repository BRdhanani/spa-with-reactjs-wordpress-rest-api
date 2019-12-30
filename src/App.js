import React, { Fragment } from "react";
import axios from "axios";
import "./App.css";
import {
    BrowserRouter as Router,
} from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    getAllPosts = async () => {
      let responce = await axios.get(
        'http://localhost/gutenberg-demo/wp-json/sections/v1/todo-list'
      );
        let { data } = await responce;
        this.setState({ posts: data });
    };

    componentDidMount = async () => {
      await this.getAllPosts();
    };

    render() {
        const { posts } = this.state;

        return (
            <Router>
              <Fragment>
                    {/* Links */}
                    <div className="container">
                      <div className="wrap-list">
                        {posts.map((page, index) => {
                            return (
                              <>
                              <div className="wrap-input">
                                <input type="checkbox" name={page.post_title} value={page.post_title} />
                                <h2 className={"post-title"}>{page.post_title}</h2>
                                <div className={"post-content"}>{page.post_content}</div>
                              </div>
                              </>
                            );
                        })}
                      </div>
                    </div>
              </Fragment>
            </Router>
        );
    }
}