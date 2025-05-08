
import { Message } from '@/components/InterviewSimulator';

// Generate the interview questions based on domain and difficulty
export const generateInterview = async (domain: string, difficulty: string): Promise<Message[]> => {
  // In a real application, this would call OpenAI API
  // For now, we'll use mock data based on the domain and difficulty
  
  // Mock system message describing the interview format
  const systemMessage: Message = {
    role: 'system',
    content: `You are conducting a technical interview for a ${difficulty} level ${domain} developer position. Ask relevant questions, evaluate answers, and provide constructive feedback.`
  };
  
  // Mock initial assistant message with the first question
  let firstQuestion = '';
  
  switch (domain) {
    case 'react':
      if (difficulty === 'beginner') {
        firstQuestion = "Let's start with something fundamental. Can you explain what React components are and the difference between functional and class components?";
      } else if (difficulty === 'intermediate') {
        firstQuestion = "Let's dive into React hooks. Can you explain the useEffect hook and its dependency array? When would you use different approaches with dependencies?";
      } else {
        firstQuestion = "I'd like to discuss advanced React performance optimization. Can you explain how you would identify and resolve render performance issues in a complex React application with many components and deep component trees?";
      }
      break;
      
    case 'nodejs':
      if (difficulty === 'beginner') {
        firstQuestion = "Let's start by discussing Node.js fundamentals. Can you explain what Node.js is and how its event-driven architecture works?";
      } else if (difficulty === 'intermediate') {
        firstQuestion = "Let's talk about asynchronous operations in Node.js. Can you explain the difference between Promises, async/await, and callbacks? When would you use each approach?";
      } else {
        firstQuestion = "Let's discuss scalability in Node.js applications. Can you explain strategies for handling high-concurrency workloads and what tools or patterns you might implement for a production system?";
      }
      break;
      
    case 'python':
      if (difficulty === 'beginner') {
        firstQuestion = "Let's start with Python basics. Can you explain Python's list comprehensions and provide an example of when you would use them?";
      } else if (difficulty === 'intermediate') {
        firstQuestion = "Let's discuss Python's decorator pattern. Can you explain what decorators are, how they work, and provide an example of a custom decorator you might create?";
      } else {
        firstQuestion = "I'd like to discuss advanced Python topics. Can you explain Python's metaclasses, when you would use them, and provide a practical example of their application?";
      }
      break;
      
    case 'java':
      if (difficulty === 'beginner') {
        firstQuestion = "Let's start with Java basics. Can you explain inheritance in Java and how it differs from interfaces? When would you use each approach?";
      } else if (difficulty === 'intermediate') {
        firstQuestion = "Let's discuss Java concurrency. Can you explain the difference between synchronized methods, locks, and concurrent collections? When would you use each approach?";
      } else {
        firstQuestion = "I'd like to discuss advanced Java topics. Can you explain how the JVM memory model works, including the different memory areas and garbage collection strategies?";
      }
      break;
      
    case 'algorithms':
      if (difficulty === 'beginner') {
        firstQuestion = "Let's start with algorithm basics. Can you explain the concept of time and space complexity, and how you would analyze an algorithm's efficiency?";
      } else if (difficulty === 'intermediate') {
        firstQuestion = "Let's discuss common sorting algorithms. Can you explain how QuickSort works, its time complexity in different cases, and when you might choose a different sorting algorithm?";
      } else {
        firstQuestion = "I'd like to discuss advanced algorithm techniques. Can you explain dynamic programming, provide an example problem that would benefit from this approach, and walk me through your solution?";
      }
      break;
      
    default:
      firstQuestion = "Let's start with a general question. Can you tell me about your experience with software development and what areas you specialize in?";
  }
  
  const assistantMessage: Message = {
    role: 'assistant',
    content: `Hello! I'll be conducting your technical interview today for the ${domain} position. ${firstQuestion}`
  };
  
  // Return the initial messages array
  return [systemMessage, assistantMessage];
};
