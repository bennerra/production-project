import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from '../../../shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Test render', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
