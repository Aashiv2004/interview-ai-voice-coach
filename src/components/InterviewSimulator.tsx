
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Play, Square, Volume2, VolumeX } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import ChatMessage from './ChatMessage';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useVoiceSynthesis } from '@/hooks/useVoiceSynthesis';
import { generateInterview } from '@/utils/interviewGenerator';

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const InterviewSimulator = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [domain, setDomain] = useState('react');
  const [difficulty, setDifficulty] = useState('beginner');
  const [apiKeySet, setApiKeySet] = useState(false);
  const [autoVoice, setAutoVoice] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    transcript, 
    listening, 
    startListening, 
    stopListening, 
    hasRecognitionSupport
  } = useSpeechRecognition();
  
  const {
    speak,
    isSpeaking,
    cancel,
    hasSynthesisSupport,
    setVoice
  } = useVoiceSynthesis();
  
  // Check localStorage for API key on component mount
  useEffect(() => {
    const key = localStorage.getItem('openai_api_key');
    setApiKeySet(!!key);
  }, []);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Update messages when transcript changes
  useEffect(() => {
    if (transcript && !listening) {
      handleUserResponse(transcript);
    }
  }, [transcript, listening]);
  
  const startInterview = async () => {
    if (!apiKeySet) {
      toast({
        title: "API Key Required",
        description: "Please set your OpenAI API key in settings first",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const initialMessages = await generateInterview(domain, difficulty);
      setMessages(initialMessages);
      
      // Speak the first assistant message when ready
      if (autoVoice && initialMessages.length > 0) {
        const firstMessage = initialMessages.find(m => m.role === 'assistant');
        if (firstMessage) {
          speak(firstMessage.content);
        }
      }
      
      setIsInterviewStarted(true);
    } catch (error) {
      console.error("Failed to start interview:", error);
      toast({
        title: "Failed to start interview",
        description: "Please try again or check your API key",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const stopInterview = () => {
    cancel();
    stopListening();
    setIsInterviewStarted(false);
    setMessages([]);
  };
  
  const handleUserResponse = async (userInput: string) => {
    if (!userInput.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: userInput
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Simulate API call to get AI response
      // In a real application, this would be a call to OpenAI or another LLM
      const apiKey = localStorage.getItem('openai_api_key');
      
      // Wait a bit to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response for demo purposes
      const assistantMessage: Message = {
        role: 'assistant',
        content: `I see you mentioned ${userInput.substring(0, 20)}... Excellent point! Let me ask you another question. Can you explain how you would handle error boundaries in React applications?`
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      // Speak the assistant response if auto voice is enabled
      if (autoVoice) {
        speak(assistantMessage.content);
      }
    } catch (error) {
      console.error("Failed to get AI response:", error);
      toast({
        title: "Failed to get AI response",
        description: "Please try again or check your connection",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const toggleMic = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };
  
  const toggleVoice = () => {
    if (isSpeaking) {
      cancel();
    } else {
      // If not speaking, toggle auto voice setting
      setAutoVoice(!autoVoice);
    }
  };
  
  return (
    <div className="flex flex-col space-y-4">
      {!isInterviewStarted ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="domain">Interview Domain</Label>
              <Select value={domain} onValueChange={setDomain}>
                <SelectTrigger id="domain">
                  <SelectValue placeholder="Select domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="nodejs">Node.js</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="algorithms">Algorithms & Data Structures</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={startInterview} 
              disabled={isLoading || !apiKeySet} 
              className="bg-interview-primary hover:bg-interview-primary/90 text-white px-8"
            >
              Start Interview
            </Button>
          </div>
          
          {!apiKeySet && (
            <p className="text-sm text-red-500 text-center">
              Please set your OpenAI API key in the Settings tab first
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <Badge variant={difficulty === 'beginner' ? 'default' : difficulty === 'intermediate' ? 'secondary' : 'destructive'}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Badge>
              <Badge variant="outline">{domain.charAt(0).toUpperCase() + domain.slice(1)}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleVoice} 
                disabled={!hasSynthesisSupport}
                className={`${!autoVoice ? 'bg-red-100' : ''}`}
              >
                {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleMic} 
                disabled={!hasRecognitionSupport} 
                className={`${listening ? 'bg-red-100' : ''}`}
              >
                {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={stopInterview} 
                className="text-red-500"
              >
                <Square className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-850 rounded-lg border p-4 h-[400px] overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                    <div className="w-12 h-4 flex items-center">
                      <div className="wave-animation">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="wave-bar h-3" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {listening && (
                <div className="flex justify-end">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-4 flex items-center">
                        <div className="wave-animation">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="wave-bar h-3" style={{ animationDelay: `${i * 0.1}s` }}></div>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm">Listening...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              onClick={() => startListening()} 
              disabled={listening || !hasRecognitionSupport}
              className="bg-interview-primary hover:bg-interview-primary/90 text-white flex-1"
            >
              {listening ? 'Listening...' : 'Speak Now'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default InterviewSimulator;
