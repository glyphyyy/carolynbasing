import "./admin.scss";
import React, { useState } from 'react'
import { useUserAuth } from '../../contexts/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../progressBar/ProgressBar';
import { UseFirestore, HandleDelete, HandleEditName, HandleEditNumber } from '../../hooks/UseFirestore';
import arrow from "../../assets/uploadArrow.svg"

export default function Admin() {
    const {user, logOut} = useUserAuth();
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState(null);
    const { images } = UseFirestore();
    const types = ['image/png', 'image/jpeg'];
    const navigate = useNavigate();
    

    const handleLogOut = async () => {
        try {
            await logOut();
            sessionStorage.setItem('isLogged', 'false');
            navigate("/login");
        }
        catch (err) {

        }
    };
    
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('Please select an image');
        }
    }
    

    return (
        <div className="admin">
            <h1>Admin</h1>
            <p>Welcome, {user && user.email}</p>
            <div className="btn-wrap">
                <button onClick={handleLogOut} id="log-out">Log Out</button>
                <button>Change <span/>Password</button>
            </div>
            <h1>Image upload</h1>
            <p>To upload and image click the upload button below and navigate to your images location.</p>
            <form>
                <div className="label-wrap"><img src={arrow} alt="arrow"/>Upload<label for="file" class="btn"></label></div>
                <input id="file" type="file" style={{visibility:"hidden"}} onChange={changeHandler} />
                { user && <div className="error"><p>{ error }</p></div> }
                { file && <div className="file"><p>{ file.name }</p></div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </form>
            <div className="images"> 
                <h2>Gallery Dashboard</h2>
                <ul>
                    {images.map((images) => (
                    <li key={images.id}>
                        <div className="line"/>
                        <div className="img-wrap">
                            <img src={images.url} alt="gallery"/>
                        </div>
                        <form>
                            <label for="name">Image name:</label>
                            <input type="text" id="name" name="name" placeholder={images.name} onChange={(e)=>{setName(e.target.value)}}/>
                            <label for="num">Image order number:</label>
                            <input type="number" id="num" name="num" placeholder={images.number} onChange={(e)=>{setNumber(e.target.value)}}/>
                        </form>
                        <div className="btn-wrap">
                            <button className="button" onClick={() => HandleEditName(images.id, name)}>Update <span/>Name</button>
                            <button className="button" onClick={() => HandleEditNumber(images.id, number)}>Update <span/>Number</button>
                            <button className="button" onClick={() => HandleDelete(images.id)}>Delete <span/>Image</button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
