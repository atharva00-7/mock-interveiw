import React, { useState, useRef } from 'react';
import { Camera, Mic, MicOff, Volume2, VolumeX, VideoOff, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

const InterviewPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const questions = [
    "Tell me about yourself and your background.",
    "What made you interested in this position?",
    "Describe a challenging project you've worked on.",
    "Where do you see yourself in 5 years?",
    "Do you have any questions for us?"
  ];

  const handleVideoToggle = async () => {
    try {
      if (!isVideoOn) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: isAudioOn });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        mediaStreamRef.current = stream;
        setIsVideoOn(true);
      } else {
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach(track => track.stop());
        }
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
        setIsVideoOn(false);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleAudioToggle = async () => {
    try {
      if (!isAudioOn) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
        setIsAudioOn(true);
      } else {
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach(track => track.stop());
        }
        setIsAudioOn(false);
      }
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const speakQuestion = (questionIndex) => {
    if (isSpeakerOn && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(questions[questionIndex]);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const nextQuestionIndex = currentQuestion + 1;
      setCurrentQuestion(nextQuestionIndex);
      
      if (isSpeakerOn) {
        // Speak the new question after state update
        setTimeout(() => speakQuestion(nextQuestionIndex), 100);
      }
    }
  };

  const handleStartInterview = () => {
    if (isVideoOn && isAudioOn) {
      setIsInterviewStarted(true);
      speakQuestion(currentQuestion);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Virtual Interview</h1>
          {isInterviewStarted && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600 px-4">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Feed */}
          <Card className="col-span-1 shadow-lg">
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative">
                {isVideoOn ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                    <VideoOff className="w-20 h-20 text-gray-400" />
                    <p className="text-gray-400 text-lg">Camera is off</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Controls and Question */}
          <Card className="col-span-1 shadow-lg">
            <CardContent className="p-6 space-y-6">
              {/* Question Display */}
              <div className={`bg-white p-6 rounded-xl border ${isInterviewStarted ? 'border-blue-100' : 'border-gray-100'} min-h-[120px] flex items-center justify-center transition-all duration-300`}>
                <p className="text-xl text-center">
                  {isInterviewStarted 
                    ? questions[currentQuestion]
                    : "Your interview questions will appear here"}
                </p>
              </div>

              {/* Controls */}
              <div className="space-y-4">
                {!isInterviewStarted ? (
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      size="lg"
                      variant={isVideoOn ? "default" : "outline"}
                      onClick={handleVideoToggle}
                      className="w-full"
                    >
                      <Camera className="w-5 h-5 mr-2" />
                      {isVideoOn ? 'Stop Camera' : 'Start Camera'}
                    </Button>

                    <Button
                      size="lg"
                      variant={isAudioOn ? "default" : "outline"}
                      onClick={handleAudioToggle}
                      className="w-full"
                    >
                      {isAudioOn ? <Mic className="w-5 h-5 mr-2" /> : <MicOff className="w-5 h-5 mr-2" />}
                      {isAudioOn ? 'Stop Mic' : 'Start Mic'}
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                      className="flex-1"
                    >
                      {isSpeakerOn ? <Volume2 className="w-5 h-5 mr-2" /> : <VolumeX className="w-5 h-5 mr-2" />}
                      {isSpeakerOn ? 'Mute Speaker' : 'Unmute Speaker'}
                    </Button>

                    <Button 
                      onClick={() => speakQuestion(currentQuestion)} 
                      disabled={!isSpeakerOn}
                      size="lg"
                      className="flex-1"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Read Question
                    </Button>
                  </div>
                )}

                {/* Navigation */}
                <div className="pt-4">
                  {!isInterviewStarted ? (
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleStartInterview}
                      disabled={!isVideoOn || !isAudioOn}
                    >
                      Start Interview
                    </Button>
                  ) : (
                    <div className="flex justify-between items-center">
                      <Button 
                        onClick={handleNextQuestion}
                        disabled={currentQuestion >= questions.length - 1}
                        size="lg"
                        className="px-8"
                      >
                        Next Question
                      </Button>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                        {isVideoOn && isAudioOn ? "📹 🎤 Devices Active" : "⚠️ Check Devices"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Messages */}
        {(!isVideoOn || !isAudioOn) && !isInterviewStarted && (
          <Alert className="bg-blue-50 border-blue-100">
            <AlertDescription className="text-blue-800">
              Please enable both camera and microphone to begin your interview session.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default InterviewPage;