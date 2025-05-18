import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  MessageSquare, 
  Copy,
  MessageSquarePlus,
  Calendar
} from 'lucide-react';
import { format } from 'date-fns';
import { mockTemplates, MessageTemplate } from '../data/mockData';
import TemplateModal from '../components/TemplateModal';

const Templates: React.FC = () => {
  const [templates, setTemplates] = useState<MessageTemplate[]>(mockTemplates);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<MessageTemplate | null>(null);
  const [previewContent, setPreviewContent] = useState<string | null>(null);

  const handleAddTemplate = (newTemplate: MessageTemplate) => {
    if (selectedTemplate) {
      // Edit existing template
      setTemplates(templates.map(t => t.id === selectedTemplate.id ? newTemplate : t));
      setSelectedTemplate(null);
    } else {
      // Add new template
      setTemplates([...templates, newTemplate]);
    }
    setIsModalOpen(false);
  };

  const handleEditTemplate = (template: MessageTemplate) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates(templates.filter(template => template.id !== id));
  };

  const handleDuplicateTemplate = (template: MessageTemplate) => {
    const newTemplate: MessageTemplate = {
      ...template,
      id: Date.now().toString(),
      name: `${template.name} (Copy)`,
      createdAt: new Date().toISOString()
    };
    setTemplates([...templates, newTemplate]);
  };

  const handlePreview = (content: string) => {
    // Replace placeholders with example values
    const previewText = content
      .replace(/{{name}}/g, 'John Doe')
      .replace(/{{relation}}/g, 'friend');
    
    setPreviewContent(previewText);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Message Templates</h1>
          <p className="text-gray-600">Create and manage your birthday wish templates</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Template
        </button>
      </div>

      {templates.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-1">No templates yet</h3>
          <p className="text-gray-500 mb-4">
            Create your first birthday message template to get started
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
          >
            <MessageSquarePlus className="mr-2 h-5 w-5" />
            Create your first template
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-5 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900 text-lg">{template.name}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePreview(template.content)}
                      className="text-gray-400 hover:text-gray-600"
                      title="Preview"
                    >
                      <MessageSquare className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDuplicateTemplate(template)}
                      className="text-gray-400 hover:text-gray-600"
                      title="Duplicate"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleEditTemplate(template)}
                      className="text-indigo-600 hover:text-indigo-800"
                      title="Edit"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteTemplate(template.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 h-24 overflow-y-auto">
                  {template.content}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Created: {format(new Date(template.createdAt), 'MMM d, yyyy')}</span>
                  </div>
                  {template.lastUsed && (
                    <span>
                      Last used: {format(new Date(template.lastUsed), 'MMM d, yyyy')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <TemplateModal
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTemplate(null);
          }}
          onSave={handleAddTemplate}
          initialData={selectedTemplate}
        />
      )}

      {previewContent && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => setPreviewContent(null)}
            ></div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 sm:px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Message Preview
                  </h3>
                  <button
                    onClick={() => setPreviewContent(null)}
                    className="bg-gray-100 rounded-md text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 sm:mt-0 sm:ml-4 sm:mr-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-800 whitespace-pre-line">{previewContent}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setPreviewContent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;