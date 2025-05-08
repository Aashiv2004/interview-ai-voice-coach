
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for the charts
const performanceData = [
  { name: 'React', score: 85 },
  { name: 'Node.js', score: 65 },
  { name: 'Python', score: 70 },
  { name: 'Java', score: 60 },
  { name: 'Algorithms', score: 75 },
];

const sessionData = [
  { name: 'Technical', value: 60 },
  { name: 'Communication', value: 80 },
  { name: 'Problem-solving', value: 75 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const recentSessions = [
  { id: 1, date: '2025-05-07', topic: 'React Hooks', duration: '15 min', questions: 8, performanceScore: 82 },
  { id: 2, date: '2025-05-06', topic: 'Data Structures', duration: '20 min', questions: 10, performanceScore: 75 },
  { id: 3, date: '2025-05-04', topic: 'Node.js Basics', duration: '12 min', questions: 6, performanceScore: 68 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Sessions</CardTitle>
            <CardDescription>Interview practice sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-interview-primary">12</div>
            <p className="text-sm text-gray-500">+3 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Average Score</CardTitle>
            <CardDescription>Across all interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-interview-secondary">76%</div>
            <Progress value={76} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Practice Time</CardTitle>
            <CardDescription>Total time spent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-interview-accent">3.5 hrs</div>
            <p className="text-sm text-gray-500">+45 minutes this week</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Domain Performance</CardTitle>
            <CardDescription>Your scores across different domains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Skills Breakdown</CardTitle>
            <CardDescription>Performance by skill category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sessionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {sessionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Sessions</CardTitle>
          <CardDescription>Your most recent interview practices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Topic</th>
                  <th className="text-left py-3 px-4">Duration</th>
                  <th className="text-left py-3 px-4">Questions</th>
                  <th className="text-left py-3 px-4">Score</th>
                </tr>
              </thead>
              <tbody>
                {recentSessions.map((session) => (
                  <tr key={session.id} className="border-b">
                    <td className="py-3 px-4">{session.date}</td>
                    <td className="py-3 px-4">{session.topic}</td>
                    <td className="py-3 px-4">{session.duration}</td>
                    <td className="py-3 px-4">{session.questions}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className={`
                          font-medium
                          ${session.performanceScore >= 80 ? 'text-green-500' : 
                            session.performanceScore >= 70 ? 'text-yellow-500' : 'text-red-500'}
                        `}>
                          {session.performanceScore}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
