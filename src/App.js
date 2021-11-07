import styles from './App.module.css';
import CodeBar from './components/CodeBar/CodeBar';
import Header from './components/Header/Header';
import { EditorProvider } from './context/context';

function App() {
  return (
      <EditorProvider>
        <CodeBar/>

        <div className={styles.main}>
          <Header/>
        </div>
      </EditorProvider>
  );
}

export default App;
