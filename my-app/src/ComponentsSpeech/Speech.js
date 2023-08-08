import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech=()=>{
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition){
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
  /*const startListening =()=> SpeechRecognition.startListening({continuous: true, language: 'en-IN'})
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
  if(!browserSupportsSpeechRecognition){
    return null;
  }
  return(
    <>
    <div className="container">
      <h2>Speech to Text convertor</h2>
      <br/>
      <textarea className='main-content'>{transcript}</textarea>
      <button className='btn btn-primary mx-1' onClick={startListening}>Start Listening</button>
      <button className='btn btn-primary mx-1' onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
    </>
  )*/


export default Speech;