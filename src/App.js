import MathFormula from './assembly/MathFormula';  
import Book2 ,{Book_2_1,PostList,PostList_2}from './book/book2';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 >2024.9.1&nbsp;&nbsp;&nbsp; 姜圣已被被整个吧认可 </h1>
      <h1 ><MathFormula formula="\sum=\frac{\infty}{2}"/></h1>
      <Book2/>
      <Book_2_1/>
      <PostList/>
      <PostList_2/>
    </div>
  );
}

export default App;
