import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-[95%] sm:w-full max-w-lg overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b shrink-0">
          <h2 className="text-xl font-bold text-gray-800 truncate pr-2">{title}</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors shrink-0"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
