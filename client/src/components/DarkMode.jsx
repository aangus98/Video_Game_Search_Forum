import { useNavigate} from "react-router-dom";

const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
          <button onClick={() => navigate(-1)} className="greybutton bfont none"> Back </button> 
        </>
    );
};

export default BackButton