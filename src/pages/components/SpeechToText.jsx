import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState('');

  const handleListen = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported in your browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;

    if (!isListening) {
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        setText(prev => prev + ' ' + transcript);
      };
    } else {
      recognition.stop();
    }

    recognition.onend = () => setIsListening(false);
    setIsListening(!isListening);
  };

  const onChangeHandle = (e) => {
    setText(e.target.value);
  } 
  return (
    <div className="p-4 max-w-md mx-auto">
      <button 
        onClick={handleListen}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isListening ? 'Stop' : 'Start'} Listening
      </button>
      <div className="p-4 border rounded min-h-24 bg-gray-50">
        <Textarea 
            value={text}
            onChange={onChangeHandle}
        />
      </div>
    </div>
  );
};

export default SpeechToText;