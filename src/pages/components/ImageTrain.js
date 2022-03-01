import React from "react";
import { useState } from "react";
import { saveAs } from "file-saver";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDropzone } from "react-dropzone";
import "../components/image.scss";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Slider from "@material-ui/core/Slider";
import { file } from "jszip";
import { Link as Scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

// import { file } from 'jszip';
var zip = require("jszip")();

const PrettoSlider = withStyles({
  root: {
    color: "#808080",
    height: 1,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  buttonInfo: {
    backgroundColor: "teal",
  },
  buttonDiv: {
    paddingTop: "25%",
    justifyContent: "center",
    alignContent: "center",
    position: "center",
  },
}));

function ImageTrain() {
  let navigate = useNavigate();
  const classes = useStyle();
  const [files, setFiles] = useState([]);
  const [minValidate, setminValidate] = useState(70);
  const [maxValidate, setmaxValidate] = useState(90);
  const [inputValue, setInputValue] = useState("upload");
  const [trainRange, setTrainRange] = useState(0);
  const [ValidRange, setValidRange] = useState(0);
  const [testRange, setTestRange] = useState(0);

  const [visible, setVisible] = useState(false);

  let totalImages;
  let trainImagesLen = 0;
  let validateImagesLen;
  let trainImages = [];
  let validateImages = [];
  let testImages = [];

  //input coverting multiple images to zip files
  const covertBaseImages = (Images) => {
    var arrayOfImages = [];
    Array.from(Images).forEach((image) => {
      console.log(image);
      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function () {
        var arrayAuxillar = [];
        var base64 = reader.result;
        // console.log(base64)
        arrayAuxillar = base64.split(",");
        arrayOfImages.push({ base64: arrayAuxillar[1], number: image.name });
      };
    });

    // setFiles({...files, arrayOfImages});
    setFiles(arrayOfImages);
  };
  const handlevalidateChange = (event, newValue) => {
    event.preventDefault();
    // console.log("change");
    setminValidate(newValue[0]);
    setmaxValidate(newValue[1]);
    totalImages = files.length;
    trainImagesLen = Math.floor(totalImages * (minValidate / 100));
    trainImages = files.slice(0, trainImagesLen);
  };

  //Export images
  const exportZip = () => {
    console.log(files);
    // const {arrayOfImages} = files;
    var train = zip.folder("train");
    var test = zip.folder("test");
    var validate = zip.folder("validate");

    totalImages = files.length;
    console.log(totalImages);
    trainImagesLen = Math.floor(totalImages * (minValidate / 100));
    validateImagesLen = Math.floor(totalImages * (maxValidate / 100));

    console.log(validateImagesLen);
    console.log(trainImagesLen);

    console.log(" train Images", trainImages.length);
    console.log(" Validate Images", validateImages.length);

    trainImages = files.slice(0, trainImagesLen);
    validateImages = files.slice(trainImagesLen, validateImagesLen);
    testImages = files.slice(validateImagesLen, totalImages);

    // Item showing in text file
    var trainFileName = trainImages.map((item) => {
      return item.number;
    });
    var validateFileName = validateImages.map((item) => {
      return item.number;
    });
    var testFileName = testImages.map((item) => {
      return item.number;
    });

    trainImages.map((image) => {
      train.file(image.number, image.base64, { base64: true });
      train.file("train.txt", trainFileName.toString());
    });
    validateImages.map((image) => {
      validate.file(image.number, image.base64, { base64: true });
      validate.file("Validate.txt", validateFileName.toString());
    });
    testImages.map((image) => {
      test.file(image.number, image.base64, { base64: true });
      test.file("test.txt", testFileName.toString());
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "/Example.zip");
    });

    zip = require("jszip")();
  };

  return (
    <>
      <div className="file-card" id="place-to-visit">
        <div className="file-inputs">
          <p>Upload Your Files Here</p>
          <input
            multiple
            type="file"
            onChange={(e) => covertBaseImages(e.target.files)}
            className="upload-box"
          ></input>
        </div>
        <p>
          Rebalance Your Dataset, if Yes select or Default set at train = 70%,
          valid = 20%, test = 10%
        </p>
        <div className="input-div">
          <div style={{ marginRight: "100px" }}>
            Yes
            <input
              type="radio"
              value="1"
              name="isyes"
              onClick={() => setVisible(true)}
            />
          </div>
          <div>
            No
            <input
              type="radio"
              value="0"
              name="isyes"
              onClick={() => setVisible(false)}
            />
          </div>
        </div>
        {visible && (
          <div className="main-selector">
            <Typography gutterBottom className="typo-info">
              <div>
                <p>Train</p>
                <p>{trainRange}</p>
              </div>
              <div>
                <p>Validate</p>
                <p>{ValidRange}</p>
              </div>
              <div>
                <p>Test</p>
                <p>{testRange}</p>
              </div>
            </Typography>

            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              value={[minValidate, maxValidate]}
              step={10}
              onChange={handlevalidateChange}
              className="gutterBtn"
            />
          </div>
        )}
        <div className="btn-wrapper">
          <Button onClick={() => exportZip()} className="btn-default">
            Download
          </Button>
        </div>
        <p className="main">All type of files supports here</p>
      </div>

      <Box>
        <div className="seperat-div">
          <Box
            className="btn-info"
            onClick={() => {
              navigate("/datasplitter01/");
            }}
          >
            Go Back
          </Box>
        </div>
      </Box>
    </>
  );
}

export default ImageTrain;
