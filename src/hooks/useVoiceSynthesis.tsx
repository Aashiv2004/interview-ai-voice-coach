
import { useState, useEffect, useCallback } from 'react';

interface VoiceSynthesisHook {
  speak: (text: string) => void;
  cancel: () => void;
  isSpeaking: boolean;
  hasSynthesisSupport: boolean;
  voices: SpeechSynthesisVoice[];
  setVoice: (voiceURI: string) => void;
}

export const useVoiceSynthesis = (): VoiceSynthesisHook => {
  const [synthesis, setSynthesis] = useState<SpeechSynthesis | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasSynthesisSupport, setHasSynthesisSupport] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setHasSynthesisSupport(true);
      setSynthesis(window.speechSynthesis);
      
      // Load available voices
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      // Chrome and Safari handle voice loading differently
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }

      // Initial load attempt
      loadVoices();
      
      // Set up event listeners for speech state
      const handleSpeechStart = () => setIsSpeaking(true);
      const handleSpeechEnd = () => setIsSpeaking(false);
      
      // Clean up on unmount
      return () => {
        if (synthesis) {
          synthesis.cancel();
        }
      };
    } else {
      console.warn('Speech synthesis not supported in this browser');
    }
  }, []);

  // Function to speak text
  const speak = useCallback((text: string) => {
    if (!synthesis || !hasSynthesisSupport) return;
    
    // Cancel any ongoing speech
    synthesis.cancel();
    
    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set the selected voice if available
    if (selectedVoice) {
      const voice = voices.find(v => v.voiceURI === selectedVoice);
      if (voice) utterance.voice = voice;
    } else {
      // Try to use a good default English voice
      const defaultVoice = voices.find(
        voice => voice.lang.includes('en') && voice.name.includes('Google') && !voice.name.includes('Female')
      ) || voices.find(
        voice => voice.lang.includes('en')
      );
      
      if (defaultVoice) utterance.voice = defaultVoice;
    }
    
    // Set speech properties
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Add event handlers
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
      console.error('Speech synthesis error', event);
      setIsSpeaking(false);
    };
    
    // Speak the text
    synthesis.speak(utterance);
  }, [synthesis, hasSynthesisSupport, voices, selectedVoice]);

  // Function to cancel speech
  const cancel = useCallback(() => {
    if (synthesis) {
      synthesis.cancel();
      setIsSpeaking(false);
    }
  }, [synthesis]);

  // Function to set the voice by URI
  const setVoice = useCallback((voiceURI: string) => {
    setSelectedVoice(voiceURI);
  }, []);

  return {
    speak,
    cancel,
    isSpeaking,
    hasSynthesisSupport,
    voices,
    setVoice
  };
};
