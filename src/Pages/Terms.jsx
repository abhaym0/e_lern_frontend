import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Terms = ({ courseId }) => { // Destructure courseId from props
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const navigate = useNavigate();
    const cancelTerms = () => {
        navigate("/userui");
    }
    const { id } = useParams();
    return (
        <div className='terms'>
            <div className='terms-card'>
                <input type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                ></input>
                <label>I Accept Terms and conditions</label><br></br>
                <button
                    disabled={!isChecked}
                    className={isChecked ? 'checked' : 'unchecked'}
                    onClick={() => { navigate(`/course/${courseId}`) }}
                >Enroll</button>
                <button
                    className='terms-cancel'
                    onClick={cancelTerms}
                >Cancel</button>
            </div>
        </div>
    )
}

export default Terms;
