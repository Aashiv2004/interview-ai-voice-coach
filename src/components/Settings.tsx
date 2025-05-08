
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Info } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [autoTranscribe, setAutoTranscribe] = useState(true);
  const [autoVoice, setAutoVoice] = useState(true);
  const [voiceId, setVoiceId] = useState('EXAVITQu4vr4xnSDxMaL'); // Default voice
  const [model, setModel] = useState('gpt-4o');
  const [keyMasked, setKeyMasked] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  
  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    const savedAutoTranscribe = localStorage.getItem('auto_transcribe');
    const savedAutoVoice = localStorage.getItem('auto_voice');
    const savedVoiceId = localStorage.getItem('voice_id');
    const savedModel = localStorage.getItem('model');
    
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedAutoTranscribe !== null) setAutoTranscribe(savedAutoTranscribe === 'true');
    if (savedAutoVoice !== null) setAutoVoice(savedAutoVoice === 'true');
    if (savedVoiceId) setVoiceId(savedVoiceId);
    if (savedModel) setModel(savedModel);
  }, []);
  
  const saveSettings = () => {
    // Save all settings to localStorage
    if (apiKey) localStorage.setItem('openai_api_key', apiKey);
    localStorage.setItem('auto_transcribe', autoTranscribe.toString());
    localStorage.setItem('auto_voice', autoVoice.toString());
    localStorage.setItem('voice_id', voiceId);
    localStorage.setItem('model', model);
    
    setIsSaved(true);
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated",
    });
    
    // Reset the saved indicator after a delay
    setTimeout(() => setIsSaved(false), 2000);
  };
  
  const toggleKeyVisibility = () => {
    setKeyMasked(!keyMasked);
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">API Settings</h3>
        
        <div className="space-y-2">
          <Label htmlFor="apiKey" className="flex items-center gap-2">
            OpenAI API Key
            <span className="text-xs text-gray-500">(Required)</span>
          </Label>
          <div className="flex space-x-2">
            <Input
              id="apiKey"
              type={keyMasked ? "password" : "text"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
              placeholder="Enter your OpenAI API key"
            />
            <Button variant="outline" onClick={toggleKeyVisibility}>
              {keyMasked ? "Show" : "Hide"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Your API key is stored locally and never sent to our servers.
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="model">AI Model</Label>
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger id="model">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o">GPT-4o (Recommended)</SelectItem>
              <SelectItem value="gpt-4o-mini">GPT-4o Mini (Faster)</SelectItem>
              <SelectItem value="gpt-4.5-preview">GPT-4.5 Preview (Advanced)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Voice Settings</h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="autoTranscribe" className="cursor-pointer">
              Auto Speech Recognition
            </Label>
            <Switch
              id="autoTranscribe"
              checked={autoTranscribe}
              onCheckedChange={setAutoTranscribe}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Automatically start listening after AI responds
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="autoVoice" className="cursor-pointer">
              AI Voice Responses
            </Label>
            <Switch
              id="autoVoice"
              checked={autoVoice}
              onCheckedChange={setAutoVoice}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Enable spoken AI responses
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="voice">Voice Selection</Label>
          <Select value={voiceId} onValueChange={setVoiceId}>
            <SelectTrigger id="voice">
              <SelectValue placeholder="Select voice" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EXAVITQu4vr4xnSDxMaL">Sarah (Female)</SelectItem>
              <SelectItem value="TX3LPaxmHKxFdv7VOQHJ">Liam (Male)</SelectItem>
              <SelectItem value="CwhRBWXzGAHq8TQ4Fs17">Roger (Male)</SelectItem>
              <SelectItem value="XB0fDUnXU5powFXDhCwa">Charlotte (Female)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Need ElevenLabs API Key?</h4>
            <p className="text-xs mt-1">
              For enhanced voice quality, consider integrating with ElevenLabs API.
              Support for ElevenLabs will be added in a future update.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={saveSettings} 
          className="bg-interview-primary hover:bg-interview-primary/90"
        >
          {isSaved ? "Saved!" : "Save Settings"}
        </Button>
      </div>
    </div>
  );
};

export default Settings;
