import React from 'react'

const Header = (): React.ReactElement  => (
  <header className="bg-slate-700 text-white px-8">
    <div className="container mx-auto flex">
      <h1 className="py-4 text-2xl font-bold flex-auto">
        Mfe-header
      </h1>
      <nav className="flex-auto">
        <ul className="flex h-full float-right">
          <li><a href="#" className="p-4 inline-block h-full bg-slate-900">Homepage</a></li>
          <li><a href="#" className="p-4 inline-block h-full hover:bg-slate-900">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
