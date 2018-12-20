import React from "react";
import CommentList from "./comments/CommentList";
import CommentForm from "./comments/CommentForm";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";

class App extends React.Component {
  addComment(comment) {
    this.setState({ comments: [...this.state.comments, comment] });
  }

  deleteComment(comment) {
    const updatedComments = this.state.comments.filter(c => c !== comment);
    this.setState({ comments: updatedComments });
  }

  render() {
    return (
      <div>
        <Navbar />
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}

export default App;
