'use client'

import { useEffect, useRef, useState } from 'react'
import { fabric } from 'fabric'
import { EditorToolbar } from './EditorToolbar'
import { EditorSidebar } from './EditorSidebar'
import { Save, Download, FileImage, FileText } from 'lucide-react'
import toast from 'react-hot-toast'

export function EditorContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 1080,
      height: 1080,
      backgroundColor: '#ffffff',
    })

    setCanvas(fabricCanvas)

    // Handle object selection
    fabricCanvas.on('selection:created', (e) => {
      setSelectedObject(e.selected?.[0] || null)
    })

    fabricCanvas.on('selection:updated', (e) => {
      setSelectedObject(e.selected?.[0] || null)
    })

    fabricCanvas.on('selection:cleared', () => {
      setSelectedObject(null)
    })

    return () => {
      fabricCanvas.dispose()
    }
  }, [])

  const handleAddText = () => {
    if (!canvas) return

    const text = new fabric.Text('คลิกเพื่อแก้ไข', {
      left: 100,
      top: 100,
      fontSize: 40,
      fill: '#000000',
      fontFamily: 'Arial',
    })

    canvas.add(text)
    canvas.setActiveObject(text)
    canvas.renderAll()
    toast.success('เพิ่มข้อความแล้ว')
  }

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canvas || !e.target.files?.[0]) return

    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      const imgUrl = event.target?.result as string
      fabric.Image.fromURL(imgUrl, (img) => {
        img.scaleToWidth(400)
        img.set({
          left: 100,
          top: 100,
        })
        canvas.add(img)
        canvas.renderAll()
        toast.success('เพิ่มรูปภาพแล้ว')
      })
    }

    reader.readAsDataURL(file)
  }

  const handleExport = async (format: 'png' | 'jpg' | 'pdf') => {
    if (!canvas) return

    try {
      if (format === 'png' || format === 'jpg') {
        const dataURL = canvas.toDataURL({
          format: format,
          quality: 1,
          multiplier: 2,
        })

        const link = document.createElement('a')
        link.download = `design.${format}`
        link.href = dataURL
        link.click()
        toast.success(`ดาวน์โหลด ${format.toUpperCase()} สำเร็จ`)
      } else if (format === 'pdf') {
        // PDF export would require additional library like jsPDF
        toast.info('PDF export จะเปิดใช้งานเร็วๆ นี้')
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการส่งออก')
    }
  }

  const handleSave = async () => {
    if (!canvas) return

    try {
      const canvasData = JSON.stringify(canvas.toJSON())
      localStorage.setItem('editor-draft', canvasData)
      
      // TODO: Save to database via API
      toast.success('บันทึกแล้ว (Draft)')
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการบันทึก')
    }
  }

  const handleLoadDraft = () => {
    if (!canvas) return

    const draft = localStorage.getItem('editor-draft')
    if (draft) {
      canvas.loadFromJSON(draft, () => {
        canvas.renderAll()
        toast.success('โหลด Draft สำเร็จ')
      })
    } else {
      toast.info('ไม่พบ Draft ที่บันทึกไว้')
    }
  }

  return (
    <div className="flex h-screen pt-16">
      {/* Sidebar */}
      <EditorSidebar
        onAddText={handleAddText}
        onAddImage={handleAddImage}
        selectedObject={selectedObject}
        canvas={canvas}
      />

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <EditorToolbar
          onSave={handleSave}
          onExport={handleExport}
          onLoadDraft={handleLoadDraft}
        />

        {/* Canvas Container */}
        <div className="flex-1 overflow-auto bg-dark-900 p-8">
          <div className="flex items-center justify-center h-full">
            <div className="canvas-container">
              <canvas ref={canvasRef} className="shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

