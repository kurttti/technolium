'use client'

import { useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'

interface NewsSearchProps {
  onSearch: (query: string) => void
  onFilterChange: (tags: string[]) => void
}

export function NewsSearch({ onSearch, onFilterChange }: NewsSearchProps) {
  const [search, setSearch] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const tags = [
    { id: 'cybersecurity', label: 'Кибербезопасность', color: 'bg-[#0095FF]' },
    { id: 'java', label: 'Java', color: 'bg-[#1E4FCD]' },
    { id: 'golang', label: 'Golang', color: 'bg-black' },
    { id: 'opportunities', label: 'Расширяем возможности', color: 'bg-[#1E4FCD]' }
  ]

  const handleSearch = (value: string) => {
    setSearch(value)
    onSearch(value)
  }

  const handleTagToggle = (tagId: string) => {
    const newTags = selectedTags.includes(tagId)
      ? selectedTags.filter(t => t !== tagId)
      : [...selectedTags, tagId]
    setSelectedTags(newTags)
    onFilterChange(newTags)
  }

  const clearFilters = () => {
    setSelectedTags([])
    onFilterChange([])
  }

  return (
    <div className="mb-8">
      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Поиск по сайту"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-sm"
          />
        </div>
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center gap-2 px-4 py-2 border rounded-sm hover:bg-gray-50 ${
            selectedTags.length > 0 ? 'border-[#1E4FCD] text-[#1E4FCD]' : ''
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Фильтр
          {selectedTags.length > 0 && (
            <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-[#1E4FCD] rounded-full">
              {selectedTags.length}
            </span>
          )}
        </button>
      </div>

      {isFilterOpen && (
        <div className="border rounded-sm p-4 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Фильтр по тегам</h3>
            {selectedTags.length > 0 && (
              <button 
                onClick={clearFilters}
                className="text-sm text-[#1E4FCD] hover:underline"
              >
                Сбросить все
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagToggle(tag.id)}
                className={`px-3 py-1 border rounded-sm transition-colors ${
                  selectedTags.includes(tag.id)
                    ? `${tag.color} text-white`
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

