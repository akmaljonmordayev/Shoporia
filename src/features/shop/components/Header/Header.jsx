import React, { useState, useCallback, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => [
    { id: 'sales', name: 'Акции', icon: '🎁', isBadge: true },
    { id: 'washing-machines', name: 'Стиральные машины', path: '/category/washing-machines' },
    { id: 'coffee-machines', name: 'Кофемашины', path: '/category/coffee-machines' },
    { id: 'heaters', name: 'Обогреватели', path: '/category/heaters' },
    { id: 'apple', name: 'Apple', path: '/category/apple' },
    { id: 'tvs', name: 'Телевизоры', path: '/category/tvs' },
    { id: 'laptops', name: 'Ноутбуки', path: '/category/laptops' },
    { id: 'fridges', name: 'Холодильники', path: '/category/fridges' },
    { id: 'conditioners', name: 'Кондиционеры', path: '/category/conditioners' },
    { id: 'smartphones', name: 'Смартфоны', path: '/category/smartphones' },
    { id: 'smartwatches', name: 'Смарт-часы', path: '/category/smartwatches' },
    { id: 'all', name: 'Все товары', path: '/category/all' },
  ], [])

  const handleSearch = useCallback((e) => {
    e.preventDefault()
    const trimmedQuery = searchQuery.trim()
    if (trimmedQuery) {
      window.location.href = `/search?q=${encodeURIComponent(trimmedQuery)}`
      setSearchQuery('')
    }
  }, [searchQuery])

  const handleCategoryClick = useCallback((category) => {
    if (category.path) {
      window.location.href = category.path
    } else if (category.isBadge) {
      window.location.href = '/category/sales'
    }
  }, [])

  return (
    <header className="bg-white shadow-md">
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <IoCallOutline className="text-red-600 text-lg" />
              <span>+998 71 203 33 33</span>
            </div>
            <span>Ташкент</span>
          </div>
          <div className="flex items-center gap-4">
            <NavLink to="/delivery" className="hover:text-red-600 transition">Доставка</NavLink>
            <NavLink to="/stores" className="hover:text-red-600 transition">Магазины</NavLink>
            <NavLink to="/installment" className="hover:text-red-600 transition">Рассрочка</NavLink>
            <NavLink to="/contact" className="hover:text-red-600 transition">Связаться с нами!</NavLink>
            <NavLink to="/language" className="hover:text-red-600 transition">Русский</NavLink>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-red-600 cursor-pointer hover:opacity-80 transition">
            Shoporia
          </NavLink>

          <div className="hidden md:flex flex-1 mx-8">
            <form onSubmit={handleSearch} className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Са"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition">
                <FiSearch className="text-xl" />
              </button>
            </form>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-blue-900">0 нас</span>
            </div>

            <NavLink to="/orders" className="relative flex items-center gap-2 hover:text-red-600 transition group">
              <FiShoppingCart className="text-2xl" />
              <span className="text-sm font-semibold">Корзина</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </NavLink>

            <NavLink to="/favorites" className="flex items-center gap-2 hover:text-red-600 transition">
              <FiHeart className="text-2xl" />
              <span className="text-sm font-semibold">Избранное</span>
            </NavLink>

            <NavLink to="/compare" className="flex items-center gap-2 hover:text-red-600 transition">
              <FiShoppingCart className="text-2xl" />
              <span className="text-sm font-semibold">Сравнить</span>
            </NavLink>

            <NavLink to="/login" className="flex items-center gap-2 hover:text-red-600 transition">
              <FiUser className="text-2xl" />
              <span className="text-sm font-semibold">Войти</span>
            </NavLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center text-2xl text-gray-700"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
              <FiSearch className="text-xl" />
            </button>
          </form>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <NavLink to="/orders" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <FiShoppingCart className="text-xl" />
              <span>Корзина</span>
            </NavLink>
            <NavLink to="/favorites" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <FiHeart className="text-xl" />
              <span>Избранное</span>
            </NavLink>
            <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <FiUser className="text-xl" />
              <span>Войти</span>
            </NavLink>
          </div>
        )}
      </div>

      <div className="bg-gray-50 border-t border-gray-200 hidden md:block overflow-x-auto">
        <div className="px-4 py-3">
          <div className="flex gap-6 text-sm font-semibold text-gray-700 whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`hover:text-red-600 transition flex items-center gap-1 py-1 ${
                  category.isBadge ? 'bg-green-400 text-white rounded-full px-3 hover:text-white hover:bg-green-500' : ''
                }`}
              >
                {category.icon && <span>{category.icon}</span>}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
