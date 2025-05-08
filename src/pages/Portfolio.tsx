
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { CodeIcon, BookIcon, ShieldCheckIcon, GraduationCapIcon, User2Icon } from 'lucide-react';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <main className="mt-8">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="mx-auto w-20 h-20 bg-interview-primary rounded-full flex items-center justify-center text-white mb-4">
                <User2Icon size={40} />
              </div>
              <CardTitle className="text-3xl font-bold">AI Interview Chatbot Simulator</CardTitle>
              <CardDescription className="text-lg">
                Software Engineering and Project Management (CSC303J)
              </CardDescription>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">NLP</Badge>
                <Badge variant="secondary">Speech Recognition</Badge>
                <Badge variant="secondary">AI</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">Rifath Hossain</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Registration Number</p>
                  <p className="font-medium">RA2211003010628</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Program</p>
                  <p className="font-medium">B.Tech., Computer Science and Engineering (3rd Year, SRM IST)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Faculty In-Charge</p>
                  <p className="font-medium">Dr. R. Yamini, Assistant Professor, Department of Computing Technologies</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <CodeIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="development" className="flex items-center gap-2">
                <BookIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Development</span>
              </TabsTrigger>
              <TabsTrigger value="testing" className="flex items-center gap-2">
                <ShieldCheckIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Testing</span>
              </TabsTrigger>
              <TabsTrigger value="learning" className="flex items-center gap-2">
                <GraduationCapIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Learning</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>
                    The primary aim and scope of the project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The AI Interview Chatbot Simulator was developed as a capstone project for the 
                    Software Engineering and Project Management course. The primary aim of this project 
                    was to design and implement a web-based AI-driven chatbot capable of conducting 
                    technical interview simulations.
                  </p>
                  <p>
                    This system leverages Natural Language Processing (NLP), speech-to-text conversion, 
                    and intelligent response evaluation to provide an interactive, voice-enabled platform 
                    that mimics real interview scenarios. Users can practice domain-specific interviews, 
                    receive feedback, and track their performance over time.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Voice-enabled interview simulation</li>
                        <li>Domain-specific technical questions</li>
                        <li>Multiple difficulty levels</li>
                        <li>Real-time speech recognition</li>
                        <li>Performance tracking and analytics</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">Technologies Used</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>React & TypeScript</li>
                        <li>Web Speech API</li>
                        <li>Natural Language Processing</li>
                        <li>Tailwind CSS</li>
                        <li>OpenAI API Integration</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="development">
              <Card>
                <CardHeader>
                  <CardTitle>Development Process</CardTitle>
                  <CardDescription>
                    Engineering principles and methodologies applied
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Following the structured engineering practices taught in the course, 
                    I began with a thorough requirement gathering phase and created a 
                    Software Requirements Specification (SRS) document. The system design 
                    was modeled using UML diagrams including class, sequence, and deployment diagrams.
                  </p>
                  
                  <p>
                    Estimations were done using COCOMO II and Function Point Analysis to plan resources 
                    and effort. The application was implemented with modular components covering the 
                    user interface, voice interaction module, question bank manager, and 
                    NLP-based answer evaluator.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="font-medium text-lg mb-2">Development Lifecycle</h3>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Requirements Analysis</li>
                          <li>System Design & Architecture</li>
                          <li>Implementation in iterative sprints</li>
                          <li>Integration of voice recognition</li>
                          <li>AI model training & integration</li>
                          <li>User testing & refinement</li>
                          <li>Deployment & documentation</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg mb-2">Architecture Components</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                          <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                              <th className="py-2 px-4 text-left">Component</th>
                              <th className="py-2 px-4 text-left">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-2 px-4 font-medium">UI Module</td>
                              <td className="py-2 px-4">React-based frontend with interview interface</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-2 px-4 font-medium">Voice Interaction</td>
                              <td className="py-2 px-4">Speech recognition and synthesis components</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-2 px-4 font-medium">Question Bank</td>
                              <td className="py-2 px-4">Domain-specific interview questions database</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 font-medium">Answer Evaluator</td>
                              <td className="py-2 px-4">NLP-based response analysis engine</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="testing">
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Risk Management</CardTitle>
                  <CardDescription>
                    Quality assurance and risk mitigation strategies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    I adopted Test-Driven Development (TDD) practices, writing unit and 
                    integration tests for every module. Peer code reviews were conducted 
                    to uphold coding standards.
                  </p>
                  
                  <p>
                    A Risk Mitigation, Monitoring, and Management (RMMM) plan was also 
                    formulated to handle potential risks like model inaccuracies or API failures. 
                    The final deployment simulated a release cycle including feedback 
                    collection and versioning strategies.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">Testing Approach</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Unit tests for individual components</li>
                        <li>Integration tests for module interactions</li>
                        <li>End-to-end tests for complete flows</li>
                        <li>User acceptance testing</li>
                        <li>Performance and stress testing</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">Risk Management</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Identification of potential risks</li>
                        <li>Probability and impact assessment</li>
                        <li>Mitigation strategies development</li>
                        <li>Monitoring protocols</li>
                        <li>Contingency planning</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium text-lg mb-2">Key Risk Factors & Mitigation</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th className="py-2 px-4 text-left">Risk</th>
                            <th className="py-2 px-4 text-left">Impact</th>
                            <th className="py-2 px-4 text-left">Mitigation</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 px-4">Speech recognition errors</td>
                            <td className="py-2 px-4">High</td>
                            <td className="py-2 px-4">Text fallback, error correction algorithms</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-2 px-4">API rate limiting</td>
                            <td className="py-2 px-4">Medium</td>
                            <td className="py-2 px-4">Caching, request batching</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">Browser compatibility</td>
                            <td className="py-2 px-4">Medium</td>
                            <td className="py-2 px-4">Feature detection, fallbacks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="learning">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Outcomes</CardTitle>
                  <CardDescription>
                    Skills and knowledge acquired from the project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    This project gave me practical exposure to the full software development 
                    lifecycle—from requirement elicitation to testing and deployment—using 
                    agile principles. I developed expertise in AI integration, system design, 
                    and software project planning, and gained hands-on experience with tools 
                    such as Flask, React, Google Speech API, and NLP libraries.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">Technical Skills</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>React & TypeScript development</li>
                        <li>AI/ML model integration</li>
                        <li>Speech recognition implementation</li>
                        <li>API design and integration</li>
                        <li>Responsive UI development</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">Engineering Practices</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Software requirements analysis</li>
                        <li>System architecture design</li>
                        <li>Test-driven development</li>
                        <li>Version control & CI/CD</li>
                        <li>Technical documentation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">Project Management</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Agile methodology application</li>
                        <li>Task prioritization</li>
                        <li>Risk assessment & mitigation</li>
                        <li>Resource planning</li>
                        <li>Stakeholder communication</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium text-lg mb-3">Key Takeaways</h3>
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <p className="italic">
                        "This project was transformative in my understanding of software engineering 
                        principles. The practical application of theoretical concepts—from SRS documentation 
                        to COCOMO estimation—solidified my comprehension of the software development 
                        lifecycle. The integration of AI capabilities presented unique challenges that 
                        expanded my problem-solving skills and technical toolkit."
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Course Duration: January 2025 – April 2025
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
