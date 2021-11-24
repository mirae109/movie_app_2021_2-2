import React from 'react';
import { Remarkable } from 'remarkable';

import ReactDOM from 'react-dom';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '여기에 입력하세요' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">

        <h3>Input</h3>
        <label htmlFor="markdown-content">글쓰기-> </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />

        <h3>Output</h3>
        <div className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}


export default MarkdownEditor;