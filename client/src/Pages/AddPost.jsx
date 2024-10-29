import '../App.css';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import gamefologo from '../assets/gamefologo.png';
import AddReview from '../components/AddReview';
import AddRecommendation from '../components/AddRecommendation';
import AddCompletionTime from '../components/AddCompletionTime';

export function AddPost() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const postType = params.get('type');

  const renderForm = () => {
    switch (postType) {
      case 'review':
        return <AddReview />;
      case 'recommendation':
        return <AddRecommendation />;
      case 'completiontime':
        return <AddCompletionTime />;
      default:
         return <p>Invalid post type.</p>
    }
  };

  return (
    <div className="Bakcground container">
      <div className="page container">
        <header className="container"> 
          <div className="logo container">
            <img className="imagelogo container" src={gamefologo} width="900"></img>
          </div>
          <div className='container'>
            <SearchBar className="container"/>
          </div>
        </header>
        <div>{renderForm()}</div>
      </div>
    </div>  
  )
};

export default AddPost;
