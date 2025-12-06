'use client'

import { useState } from 'react'
import { Type, Image, Layers, Palette, Trash2 } from 'lucide-react'
import { fabric } from 'fabric'

interface EditorSidebarProps {
  onAddText: () => void
  onAddImage: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedObject: fabric.Object | null
  canvas: fabric.Canvas | null
}

export function EditorSidebar({ onAddText, onAddImage, selectedObject, canvas }: EditorSidebarProps) {
  const [activeTab, setActiveTab] = useState<'tools' | 'layers' | 'properties'>('tools')
  const [fontSize, setFontSize] = useState(40)
  const [fontColor, setFontColor] = useState('#000000')

  const handleDelete = () => {
    if (!canvas || !selectedObject) return

    canvas.remove(selectedObject)
    canvas.renderAll()
  }

  const handlePropertyChange = (property: string, value: any) => {
    if (!canvas || !selectedObject) return

    selectedObject.set(property as any, value)
    canvas.renderAll()
  }

  return (
    <div className="w-80 glass-dark border-r border-white/10 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-white/10">
        <button
          onClick={() => setActiveTab('tools')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'tools'
              ? 'text-primary-400 border-b-2 border-primary-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          เครื่องมือ
        </button>
        <button
          onClick={() => setActiveTab('layers')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'layers'
              ? 'text-primary-400 border-b-2 border-primary-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          เลเยอร์
        </button>
        <button
          onClick={() => setActiveTab('properties')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'properties'
              ? 'text-primary-400 border-b-2 border-primary-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          คุณสมบัติ
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'tools' && (
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">เครื่องมือ</h3>

            {/* Add Text */}
            <button
              onClick={onAddText}
              className="w-full px-4 py-3 glass border border-white/10 hover:border-primary-500/50 rounded-lg text-white font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <Type className="w-5 h-5" />
              <span>เพิ่มข้อความ</span>
            </button>

            {/* Upload Image */}
            <label className="w-full px-4 py-3 glass border border-white/10 hover:border-primary-500/50 rounded-lg text-white font-medium transition-all duration-300 flex items-center space-x-2 cursor-pointer">
              <Image className="w-5 h-5" />
              <span>อัปโหลดรูปภาพ</span>
              <input
                type="file"
                accept="image/*"
                onChange={onAddImage}
                className="hidden"
              />
            </label>
          </div>
        )}

        {activeTab === 'layers' && (
          <div>
            <h3 className="text-white font-semibold mb-4">เลเยอร์</h3>
            <div className="space-y-2">
              {canvas?.getObjects().map((obj, index) => (
                <div
                  key={index}
                  className={`p-3 glass border border-white/10 rounded-lg cursor-pointer transition-all ${
                    selectedObject === obj ? 'border-primary-500' : ''
                  }`}
                  onClick={() => canvas.setActiveObject(obj)}
                >
                  <p className="text-white text-sm">
                    {obj.type === 'textbox' || obj.type === 'text' ? 'ข้อความ' : 'รูปภาพ'}
                  </p>
                </div>
              ))}
              {(!canvas?.getObjects() || canvas.getObjects().length === 0) && (
                <p className="text-gray-400 text-sm">ยังไม่มีเลเยอร์</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'properties' && (
          <div className="space-y-6">
            <h3 className="text-white font-semibold mb-4">คุณสมบัติ</h3>

            {selectedObject ? (
              <>
                {/* Font Size (for text) */}
                {(selectedObject.type === 'text' || selectedObject.type === 'textbox') && (
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">ขนาดตัวอักษร</label>
                    <input
                      type="number"
                      value={fontSize}
                      onChange={(e) => {
                        const size = parseInt(e.target.value)
                        setFontSize(size)
                        handlePropertyChange('fontSize', size)
                      }}
                      className="w-full px-4 py-2 bg-dark-800 border border-white/10 rounded-lg text-white"
                      min="10"
                      max="200"
                    />
                  </div>
                )}

                {/* Color */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">สี</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={fontColor}
                      onChange={(e) => {
                        setFontColor(e.target.value)
                        handlePropertyChange('fill', e.target.value)
                      }}
                      className="w-12 h-12 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={fontColor}
                      onChange={(e) => {
                        setFontColor(e.target.value)
                        handlePropertyChange('fill', e.target.value)
                      }}
                      className="flex-1 px-4 py-2 bg-dark-800 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={handleDelete}
                  className="w-full px-4 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>ลบ</span>
                </button>
              </>
            ) : (
              <p className="text-gray-400 text-sm">เลือกออบเจ็กต์เพื่อแก้ไขคุณสมบัติ</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

