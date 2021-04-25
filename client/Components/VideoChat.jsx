import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhoneIcon from "@material-ui/icons/Phone";
import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";
import style from "./Styles/video.module.css";
// import "./App.css"
import { MdCall, MdCallEnd } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const socket = io.connect("http://192.168.1.7:5000");
function VideoChat() {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const [toggleVideo, setToggleVideo] = useState(true);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      console.log("your id is");
      console.log(id);
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  return (
    <div className={style.video_container}>
      <h1 style={{ textAlign: "center", color: "#fff" }}>Video Call</h1>
      <div className="container">
        <div className={style.video__wrap}>
          <div className="video">
            {stream && (
              <video
                onClick={() => setToggleVideo(!toggleVideo)}
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className={toggleVideo ? style.big_video : style.small_video}
              />
            )}
          </div>
          <div className="video">
            {callAccepted && !callEnded ? (
              <video
                onClick={() => setToggleVideo(!toggleVideo)}
                playsInline
                ref={userVideo}
                autoPlay
				muted
                className={!toggleVideo ? style.big_video : style.small_video}
              />
            ) : null}
          </div>
          <div>
            {receivingCall && !callAccepted ? (
              <div className={style.liftButton}>
                <FiPhoneCall
                  className={style.icon}
                  fontSize="40px"
                  color="white"
                  onClick={answerCall}
                />
              </div>
            ) : (
              <>
                {callAccepted && !callEnded ? (
                  <div className={style.callButton}>
                    <MdCallEnd
                      className={style.icon}
                      fontSize="40px"
                      color="red"
                      onClick={leaveCall}
                    />
                  </div>
                ) : (
                  <div className={style.callButton}>
                    <MdCall
                      className={style.icon}
                      fontSize="40px"
                      color="green"
                      onClick={() => callUser(idToCall)}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className={style.myId}>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              marginBottom: "20px",
              backgroundColor: "rgba(0, 128, 0, 0.321)",
            }}
          />
          <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
            <button className={style.button_copy}>Copy ID</button>
          </CopyToClipboard>

          <TextField
            id="filled-basic"
            label="ID to call"
            variant="filled"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            style={{
              marginBottom: "20px",
              backgroundColor: "rgba(0, 128, 0, 0.321)",
            }}
          />
          {/* <div className="call-button">
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" onClick={leaveCall}>
                End Call
              </Button>
            ) : (
              <IconButton
                color="primary"
                aria-label="call"
                onClick={() => callUser(idToCall)}
              >
                <PhoneIcon fontSize="large" />
              </IconButton>
            )}
            {idToCall}
          </div> */}
        </div>
        {/* <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          ) : null}
        </div> */}
      </div>
    </div>
  );
}

export default VideoChat;
