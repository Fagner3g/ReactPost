import React from "react";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Primeiro projeto React!</h1>
        <Post title="Teste react Procedimento" />
        <Post title="Programa teste de react" />
        <Post title="Outro teste de react" />
      </div>
    );
  }
}
