import 'antd/dist/antd.css'; 
import './App.css';
import MainPage from './main/index'
import {Switch,Route, Link, useHistory}from 'react-router-dom'
import UploadPage from './upload/index'
import ProductPage from './product/index'
import Footer from './main/Footer'
import {Button} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'


function App() {
   const history = useHistory()
  return (
    <div>
         <div id="header">
            <div id="header-area">
                <Link to="/">
                 <img src="/images/icons/logo.png" alt="" />
                </Link>
                <Button size="large"
                onClick={()=>history.push('/upload')}
                icon={<DownloadOutlined/>}
                >
                   상품 업로드
                </Button>
            </div>
        </div>
        <div id="body">
      <Switch>
        <Route exact={true} path='/'>
           <MainPage />
        </Route>
        <Route path='/products/:id'>
           <ProductPage />
        </Route>
        <Route path='/upload'>
           <UploadPage />
        </Route>

      </Switch>
           </div>
        <div id="footer">
            <div id="footer-text"><Footer/></div>
            </div>

    </div>
  );
}

export default App;
