import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../main';
import img from "../images/1701604915747toufick passport.jpg"

// import {} from "../images/"

const Image = () => {

    const[image,setimage] = useState(null);
    const[allimage,setAllimage] = useState(null);

    useEffect(() => {
        getImage();
    },[]);

    const submitImage = async(e) =>{
        e.preventDefault();

        const formData = new FormData();

        formData.append("image",image);

        const result = await axios.post(`${server}/image/upload-image`,
        formData,
        {
            headers : { "Content-Type" : "multipart/form-data" },
        })
    }

    const getImage = async() => {
        const result = await axios.get(`${server}/image/get-image`);

        console.log(result);

        setAllimage(result.data.data)
    }

    const onInputchange = (e) =>{
        console.log(e.target.files[0]);
        setimage(e.target.files[0]);
    }

  return (
    <div>
        <form action="" onSubmit={submitImage}>
            <input type="file" name="image" accept='image/*' onChange={onInputchange} id="" />
            <button type="submit">click</button>
        </form>

        { allimage == null ? ""
        :
        allimage.map(data => {
 
            return <img src={import.meta.glob(`../images/${data.image}`).default} alt="" height={100} width={100} />
            // return <img src={require(`../images/${data.image}`)} alt="" height={100} width={100} />
        })}
    </div>
  )
}

export default Image