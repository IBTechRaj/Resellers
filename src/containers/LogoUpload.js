import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../firebase";

const LogoUpload = ({ uploadImage }) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // const onGetImage = url => {
  //   // var url = this.state.url;
  //   props.onGetIamge(url);
  // };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            uploadImage(url);
          });
      }
    );
  };

  // console.log("image: ", image);

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      {console.log("lu", url)}
      {/* {uploadImage( url )}; */}
      <button onClick={handleUpload}>Upload</button>
      <br />
      {/* {url} */}
      {console.log("url", url)}
      <br />
      <img
        src={url || "http://via.placeholder.com/30"}
        width="30"
        height="30"
        alt="firebase-image"
      />
    </div>
  );
};

// render(<LogoUpload />, document.querySelector("#root"));
export default LogoUpload;
