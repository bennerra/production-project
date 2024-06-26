import { useState } from 'react'

import { classNames } from '../../../shared/lib/classNames/classNames'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import { LangSwitcher } from '../../LangSwitcher'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className])}
    >
      <button
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        Toggle
      </button>
      <div className={classNames(cls.switcher)}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}
