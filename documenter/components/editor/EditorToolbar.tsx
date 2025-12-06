'use client'

import { Save, Download, FileImage, FileText, Loader, Sparkles } from 'lucide-react'

interface EditorToolbarProps {
  onSave: () => void
  onExport: (format: 'png' | 'jpg' | 'pdf') => void
  onLoadDraft: () => void
}

export function EditorToolbar({ onSave, onExport, onLoadDraft }: EditorToolbarProps) {
  return (
    <div className="glass-dark border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-primary-400" />
          <span className="text-xl font-bold text-white">Editor</span>
        </div>

        <div className="flex items-center space-x-4">
          {/* AI Generate Button (Disabled) */}
          <button
            disabled
            className="px-4 py-2 glass border border-white/10 text-gray-500 rounded-lg font-medium cursor-not-allowed flex items-center space-x-2"
            title="AI Features เร็วๆ นี้"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate with AI</span>
          </button>

          {/* Load Draft */}
          <button
            onClick={onLoadDraft}
            className="px-4 py-2 glass border border-white/10 hover:border-primary-500/50 text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
          >
            <Loader className="w-4 h-4" />
            <span>โหลด Draft</span>
          </button>

          {/* Save */}
          <button
            onClick={onSave}
            className="px-4 py-2 glass border border-white/10 hover:border-primary-500/50 text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>บันทึก</span>
          </button>

          {/* Export Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>ส่งออก</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 glass-dark border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <button
                onClick={() => onExport('png')}
                className="w-full px-4 py-2 text-left text-white hover:bg-white/10 flex items-center space-x-2 rounded-t-lg"
              >
                <FileImage className="w-4 h-4" />
                <span>PNG</span>
              </button>
              <button
                onClick={() => onExport('jpg')}
                className="w-full px-4 py-2 text-left text-white hover:bg-white/10 flex items-center space-x-2"
              >
                <FileImage className="w-4 h-4" />
                <span>JPG</span>
              </button>
              <button
                onClick={() => onExport('pdf')}
                className="w-full px-4 py-2 text-left text-white hover:bg-white/10 flex items-center space-x-2 rounded-b-lg"
              >
                <FileText className="w-4 h-4" />
                <span>PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

