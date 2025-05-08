
import React from 'react';
import InterviewSimulator from '@/components/InterviewSimulator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Dashboard from '@/components/Dashboard';
import Settings from '@/components/Settings';
import { MicVoice, BarChart3, Settings2 } from 'lucide-react';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <main className="mt-8">
          <Tabs defaultValue="interview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="interview" className="flex items-center gap-2">
                <MicVoice className="h-4 w-4" />
                <span className="hidden sm:inline">Interview</span>
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Performance</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings2 className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="interview">
              <Card>
                <CardHeader>
                  <CardTitle>AI Interview Simulator</CardTitle>
                  <CardDescription>
                    Practice your interview skills with our AI interviewer. Speak clearly into your microphone.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InterviewSimulator />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="dashboard">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Dashboard</CardTitle>
                  <CardDescription>
                    Track your progress and review past interview sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dashboard />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>
                    Customize your interview experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Settings />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;
