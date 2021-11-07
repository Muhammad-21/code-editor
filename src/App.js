import styles from './App.module.css';
import CodeBar from './components/CodeBar/CodeBar';
import { EditorProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <EditorProvider>
        <CodeBar/>

        <div className={styles.main}>
          
        </div>
      </EditorProvider>
    </div>
  );
}

export default App;
