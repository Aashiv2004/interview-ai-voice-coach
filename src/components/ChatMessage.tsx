
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message } from './InterviewSimulator';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("flex gap-3 max-w-[80%]", isUser ? "flex-row-reverse" : "")}>
        <Avatar className={cn("h-8 w-8", isUser ? "bg-blue-500" : "bg-gray-500")}>
          <AvatarFallback>{isUser ? 'U' : 'AI'}</AvatarFallback>
        </Avatar>
        <div className={cn(
          "rounded-lg p-3",
          isUser 
            ? "bg-interview-primary text-white" 
            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        )}>
          <p className="text-sm">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
