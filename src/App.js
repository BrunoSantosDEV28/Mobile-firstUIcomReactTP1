import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      {}
      <div className="flex-row-reverse">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>

      {}
      <div className="flex-column-reverse">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
      </div>

      {}
      <div className="flex-grow">
        <div className="item grow-2">Item 1</div>
        <div className="item grow-1">Item 2</div>
        <div className="item grow-1">Item 3</div>
      </div>

      {}
      <div className="flex-shrink">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item shrink-0">Item 3</div>
        <div className="item">Item 4</div>
      </div>

      {}
      <div className="flex-basis">
        <div className="item">Item 1</div>
        <div className="item basis-200">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
      </div>

      {}
      <div className="flex-start">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
      </div>

      {}
      <div className="flex-end">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
      </div>

      {}
      <div className="flex-center">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>

      {}
      <div className="flex-space-between">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
      </div>

      {}
      <div className="outer-flex-row">
        <div className="inner-flex-column">
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
        </div>
        <div className="inner-flex-column">
          <div className="item">Item 4</div>
          <div className="item">Item 5</div>
          <div className="item">Item 6</div>
        </div>
      </div>

      {}
      <div className="outer-flex-column">
        <div className="inner-flex-row">
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
          <div className="item">Item 4</div>
        </div>
        <div className="inner-flex-row">
          <div className="item">Item 5</div>
          <div className="item">Item 6</div>
          <div className="item">Item 7</div>
          <div className="item">Item 8</div>
        </div>
        <div className="inner-flex-row">
          <div className="item">Item 9</div>
          <div className="item">Item 10</div>
          <div className="item">Item 11</div>
          <div className="item">Item 12</div>
        </div>
      </div>

      {}
      <div className="center-container">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>

      {}
      <div className="space-around-container">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>

      {}
      <div className="grid-4x3">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
        <div className="item">Item 9</div>
        <div className="item">Item 10</div>
        <div className="item">Item 11</div>
        <div className="item">Item 12</div>
      </div>

      {}
      <div className="grid-special">
        <div className="item item1">Item 1</div>
        <div className="item item2">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
      </div>

      {}
      <div className="grid-different-columns">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
        <div className="item">Item 9</div>
      </div>
    </div>
  );
};

export default App;
